<script setup lang="ts">
import SearchBar from '@/components/SearchBar.vue'
import AddUserButton from '@/components/AddUserButton.vue'
import ListComponent from '@/components/ListComponent.vue'
</script>

<template>
  <div class="flex flex-col list-wrapper">
    <div class="border-b-2 basis-2/12 justify-between md:items-center flex flex-col md:flex-row">
      <search-bar />
      <add-user-button />
    </div>
    <div class="basis-10/12 overflow-y-scroll">
      <list-component />
    </div>
  </div>
</template>

<style scoped>
.list-wrapper {
  width: 97%;
  height: 95%
}
</style>
