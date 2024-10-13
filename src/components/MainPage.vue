<script setup lang="ts">
import PaginationBlock from '@/components/PaginationBlock.vue'
import ListWrapper from '@/components/ListWrapper.vue'
</script>

<template>
  <div class="min-w-max w-4/5 mx-auto min-h-max h-5/6 flex flex-col">
    <div class="basis-1/12">
      <h1 class="text-4xl" style="color: #43484f">User list</h1>
    </div>
    <div class="basis-10/12 list-wrapper-bg justify-center flex items-center" style="max-height: 83.333333%">
      <list-wrapper />
    </div>
    <div class="basis-1/12 flex items-center">
      <pagination-block />
    </div>
  </div>
</template>

<style scoped>

.list-wrapper-bg {
  background-color: white;
  border-radius: 0.5rem;
  overflow: hidden;
  box-shadow: 0px 0px 6px 6px rgba(234, 234, 237, 1);
}

</style>
