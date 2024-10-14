<script setup lang="ts">
import { ref, defineProps, defineEmits, watch } from 'vue';

interface IProps {
  firstname: string;
  surname: string;
}

const props = withDefaults(defineProps<IProps>(), {
  firstname: null,
  surname: null,
})

const emit = defineEmits<{
  (e: 'update:name', firstname: string): void;
  (e: 'update:surname', surname: string): void;
}>();

const localName = ref(props.firstname);
const localSurname = ref(props.surname);

watch(() => props.firstname, (newValue) => {
  localName.value = newValue;
});
watch(() => props.surname, (newValue) => {
  localSurname.value = newValue;
});

watch(localName, (newValue) => emit('update:name', newValue));
watch(localSurname, (newValue) => emit('update:surname', newValue));

</script>

<template>
  <div class="flex flex-col" style="width: 95%; height: 95%">
    <div class="flex basis-1/2">
      <div class="flex flex-row w-full h-full">
        <div class="basis-1/2 flex items-center">
          <div class="w-11/12">
            <label for="firstname">First Name</label>
            <input id="firstname" class="w-full py-1 pl-3 mt-2 rounded-md" v-model="localName" type="text" placeholder="First Name" />
          </div>
        </div>
        <div class="basis-1/2 flex items-center">
          <div class="w-11/12">
            <label for="firstname">Last Name</label>
            <input class="w-full py-1 pl-3 mt-2 rounded-md" type="text" v-model="localSurname" placeholder="Last Name" />
          </div>
        </div>
      </div>
    </div>
    <div class="flex basis-1/2 items-end">
      <button class="add-user-button text-white px-7 py-2 rounded-md">Add User</button>
    </div>
  </div>
</template>

<style scoped>
input {
  border: 1px solid #ced5da;
}

.add-user-button {
  background-color: #1e9067;
  font-size: 0.9rem
}
</style>
