<script setup lang="ts">
import PaginationBlock from '@/components/PaginationBlock.vue'
import ListWrapper from '@/components/ListWrapper.vue'
</script>

<template>
  <div class="min-w-max w-4/5 mx-auto min-h-max h-5/6 bg-orange-400 flex flex-col">
    <div class="basis-1/12">
      <h1 class="text-4xl">User list</h1>
    </div>
    <div class="bg-red-600 basis-10/12" style="max-height: 83.333333%">
      <list-wrapper />
    </div>
    <div class="bg-blue-700 basis-1/12 flex items-center">
      <pagination-block />
    </div>
  </div>
</template>
