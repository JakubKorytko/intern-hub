<script setup lang="ts">
import SearchBar from '@/components/SearchBar.vue'
import AddUserButton from '@/components/AddUserButton.vue'
import ListComponent from '@/components/ListComponent.vue'
</script>

<template>
  <div class="flex flex-col w-full h-full">
    <div class="bg-pink-600 basis-2/12 justify-between md:items-center flex flex-col md:flex-row">
      <search-bar />
      <add-user-button />
    </div>
    <div class="bg-amber-950 basis-10/12 overflow-y-scroll">
      <list-component />
    </div>
  </div>
</template>
