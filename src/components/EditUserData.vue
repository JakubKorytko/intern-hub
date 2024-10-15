<script setup lang="ts">
import { defineEmits, defineProps, ref, watch } from 'vue'
import { Variants } from '@/types/EditUser.type'
import { deleteUser } from '@/utils/manipulateUsers.util'
import router from '@/router'

interface IProps {
  id?: number
  firstname: string
  surname: string
  variant: Variants
}

const props = withDefaults(defineProps<IProps>(), {
  firstname: '',
  surname: '',
  variant: undefined,
})

const emit = defineEmits<{
  (e: 'update:firstname', firstname: string): void
  (e: 'update:surname', surname: string): void
  (e: 'updateDetails'): void
}>()

const handleClick = () => {
  emit('updateDetails')
}

const localName = ref(props.firstname)
const localSurname = ref(props.surname)

watch(
  () => props.firstname,
  newValue => {
    localName.value = newValue
  },
)

watch(
  () => props.surname,
  newValue => {
    localSurname.value = newValue
  },
)

watch(localName, newValue => emit('update:firstname', newValue))
watch(localSurname, newValue => emit('update:surname', newValue))

const deleteUserWithRedirection = async () => {
  if (!props.id) return
  const result = await deleteUser(props.id)
  if (!result) return
  await router.push('/')
}
const isVariant = (variant: Variants) => props.variant === variant
</script>

<template>
  <div class="flex flex-col" style="width: 95%; height: 95%">
    <div class="flex basis-1/2">
      <div class="flex flex-col lg:flex-row w-full h-full">
        <div class="basis-1/2 flex items-center">
          <div class="w-full lg:w-11/12">
            <label for="firstname">First Name</label>
            <input
              id="firstname"
              class="w-full py-1 pl-3 mt-2 rounded-md"
              v-model="localName"
              type="text"
              placeholder="First Name"
            />
          </div>
        </div>
        <div class="basis-1/2 flex items-center">
          <div class="w-full lg:w-11/12">
            <label for="firstname">Last Name</label>
            <input
              class="w-full py-1 pl-3 mt-2 rounded-md"
              type="text"
              v-model="localSurname"
              placeholder="Last Name"
            />
          </div>
        </div>
      </div>
    </div>
    <div
      class="flex basis-1/2 lg:items-end flex-col justify-evenly items-center lg:flex-row lg:justify-normal"
    >
      <button
        v-if="isVariant(Variants.AddUser)"
        class="edit-user-button text-white px-7 py-2 rounded-md"
        @click="handleClick"
      >
        Add User
      </button>
      <button
        v-else-if="isVariant(Variants.EditUser)"
        class="edit-user-button text-white px-7 py-2 rounded-md"
        @click="handleClick"
      >
        Update Details
      </button>
      <button
        v-if="isVariant(Variants.EditUser)"
        @click="deleteUserWithRedirection"
        class="delete-user-button text-white px-7 py-2 rounded-md"
      >
        Delete User
      </button>
    </div>
  </div>
</template>

<style scoped>
input {
  border: 1px solid #ced5da;
}

.edit-user-button {
  background-color: #1e9067;
  font-size: 0.9rem;
}

.delete-user-button {
  background-color: #cf4242;
  margin-left: 0.4rem;
  font-size: 0.9rem;
}

@media (max-width: 1024px) {
  .delete-user-button {
    margin-left: 0;
  }

  .edit-user-button,
  .delete-user-button {
    width: 80%;
  }
}
</style>
