<script setup lang="ts">
import PaginationBlock from '@/components/UserList/PaginationBlock.vue'
import ListWrapper from '@/components/UserList/ListWrapper.vue'
</script>

<template>
  <div class="flex flex-col w-full h-full">
    <div
      class="list-wrapper-bg justify-center flex items-center overflow-hidden bg-white"
    >
      <list-wrapper />
    </div>
    <div
      class="pagination-block-wrapper flex items-center justify-center md:justify-normal"
    >
      <pagination-block />
    </div>
  </div>
</template>

<style scoped>
.list-wrapper-bg {
  border-radius: 0.5rem;
  max-height: calc(100% * 10 / 11);
  box-shadow: 0 0 6px 6px rgba(234, 234, 237, 1);
  flex-basis: calc(100% * 10 / 11);
}

.pagination-block-wrapper {
  flex-basis: calc(100% * 1 / 11);
}
</style>
