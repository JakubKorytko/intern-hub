<script setup lang="ts">
import EditUserData from '@/components/EditUserData.vue'
import EditUserImage from '@/components/EditUserImage.vue'
</script>

<template>
  <div class="h-full md:h-3/5 w-100 flex flex-col-reverse md:flex-row justify-between">
    <div class="bg-white edit-user-data-wrapper flex justify-center items-center rounded-md">
      <edit-user-data />
    </div>
    <div class="basis-5/12 edit-image-wrapper md:basis-4/12 flex justify-center items-center bg-white rounded-md">
      <edit-user-image />
    </div>
  </div>
</template>

<style scoped>
@media (max-width: 768px) {
  .edit-user-data-wrapper {
    flex-basis: 55.333333%;
  }
}

.edit-image-wrapper {
  box-shadow: 0 0 6px 6px rgba(234, 234, 237, 1);
}

.edit-user-data-wrapper {
  flex-basis: 63.666667%;
  box-shadow: 0 0 6px 6px rgba(234, 234, 237, 1);
}
</style>
