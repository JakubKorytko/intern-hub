<script setup lang="ts">
import PaginationButton from '@/components/UserList/PaginationButton.vue'

const currentPage = 1
const pages = [1, 2, 3, 4, 5, 6, 7, 8, 9]
</script>

<template>
  <div class="inline-block">
    <pagination-button :selectable="false" :active="false" text="«" />
    <template v-for="page in pages" :key="page">
      <pagination-button
        :active="page === currentPage"
        :selectable="page !== currentPage"
        :text="String(page)"
      />
    </template>
    <pagination-button :active="false" :selectable="true" text="»" />
  </div>
</template>
