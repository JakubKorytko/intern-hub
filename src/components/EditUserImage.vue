<script setup lang="ts">
import { ref, defineProps, defineEmits, watch, onMounted } from 'vue'

const imgUrl =
  'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png'

interface IProps {
  pfp: string
}

const props = withDefaults(defineProps<IProps>(), {
  pfp: imgUrl,
})

const emit = defineEmits<{
  (e: 'update:pfp', pfp: string): void
}>()

const inputInvisible = ref(true)
const localPfp = ref(props.pfp)
const imageExists = ref(false)

const toggleInputVisibility = () => {
  inputInvisible.value = !inputInvisible.value
}

watch(
  () => props.pfp,
  newValue => {
    localPfp.value = newValue
    checkImage()
  },
)

watch(localPfp, newValue => emit('update:pfp', newValue))

async function checkImage() {
  if (!localPfp.value) {
    imageExists.value = false
    return
  }

  try {
    const response = await fetch(localPfp.value, { method: 'HEAD' })

    if (!response.ok) {
      imageExists.value = false
      return
    }

    const contentType = response.headers.get('Content-Type')
    imageExists.value = contentType !== null && contentType.startsWith('image/')
  } catch (error) {
    console.error('Error fetching image:', error)
    imageExists.value = false
  }
}

onMounted(checkImage)
</script>

<template>
  <div class="flex flex-col" style="width: 95%; height: 95%">
    <div class="basis-9/12 flex justify-center items-center">
      <img
        alt="profile picture"
        v-if="imageExists"
        :src="localPfp"
        class="w-2/6 rounded-full pfp"
      />
      <img
        alt="profile picture"
        v-else
        :src="imgUrl"
        class="w-2/6 rounded-full pfp"
      />
    </div>
    <div class="basis-3/12 flex justify-center items-center">
      <div class="w-11/12 h-4/6">
        <input
          type="text"
          class="w-full h-2/6 border-t-2"
          :class="{ invisible: inputInvisible }"
          v-model="localPfp"
          @blur="checkImage"
          @change="checkImage"
          placeholder="Input image link..."
        />
        <button
          class="change-photo-button bg-white w-full h-4/6 rounded-md"
          @click="toggleInputVisibility"
        >
          <template v-if="inputInvisible">
            <i class="fa fa-camera" aria-hidden="true"></i>
            Change Photo
          </template>
          <template v-else> Confirm </template>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.change-photo-button {
  color: #68737c;
  border: 1px solid #ced5da;
}

.pfp {
  width: 10rem;
  max-width: 10rem;
  height: 10rem;
  max-height: 10rem;
  object-fit: cover;
}
</style>
