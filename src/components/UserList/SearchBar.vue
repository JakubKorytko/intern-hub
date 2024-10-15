<script setup lang="ts">
import { defineEmits, defineProps, ref, watch } from 'vue'

interface IProps {
  modelValue: string
}

const props = withDefaults(defineProps<IProps>(), {
  modelValue: '',
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

const localValue = ref(props.modelValue)

watch(
  () => props.modelValue,
  newValue => {
    localValue.value = newValue
  },
)

watch(localValue, newValue => emit('update:modelValue', newValue))
</script>

<template>
  <div class="h-12 w-full md:w-96">
    <input
      v-model="localValue"
      type="text"
      placeholder="Search for users..."
      class="h-full md:h-4/6 search-bar float-left"
    />
    <button type="submit" class="search-bar-button h-full md:h-4/6 float-left">
      <i class="fa fa-search"></i>
    </button>
  </div>
</template>

<style scoped>
.search-bar,
.search-bar-button {
  background-color: #f8f9fa;
  color: #747888;
}

.search-bar {
  width: 87%;
  padding-left: 0.7rem;
}

.search-bar-button {
  width: 13%;
}

.search-bar::after {
  content: '';
  clear: both;
}
</style>
