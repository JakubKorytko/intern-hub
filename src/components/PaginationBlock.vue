<script setup lang="ts">
import PaginationButton from '@/components/PaginationButton.vue'

const pages = [1,2,3,4,5,6,7,8,9]
</script>

<template>
  <div class="inline-block">
    <pagination-button :text="'<'" />
  <template v-for="page in pages" :key="page">
    <pagination-button :text="page" />
  </template>
    <pagination-button :text="'>'" />
  </div>
</template>
