<script setup lang="ts">
import EditUserData from '@/components/EditUserData.vue'
import EditUserImage from '@/components/EditUserImage.vue'
</script>

<template>
  <div class="h-full md:h-3/5 w-100 flex flex-col-reverse md:flex-row bg-amber-950 justify-between">
    <div class="bg-green-400 edit-user-data-wrapper">
      <edit-user-data />
    </div>
    <div class="basis-5/12 md:basis-4/12 bg-yellow-400">
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

.edit-user-data-wrapper {
  flex-basis: 63.666667%;
}
</style>
