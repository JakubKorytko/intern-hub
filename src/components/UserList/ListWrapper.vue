<script setup lang="ts">
import SearchBar from '@/components/UserList/SearchBar.vue'
import AddUserButton from '@/components/UserList/AddUserButton.vue'
import ListComponent from '@/components/UserList/ListComponent.vue'

import type { IPage } from '@/types/api'

const props = withDefaults(defineProps<{data: IPage}>(), {
  data: {}
})

</script>

<template>
  <div class="flex flex-col list-wrapper">
    <div
      class="border-b-2 basis-2/12 justify-between md:items-center flex flex-col md:flex-row"
    >
      <search-bar />
      <add-user-button />
    </div>
    <div class="basis-10/12 overflow-y-scroll">
      <list-component :data="props.data" />
    </div>
  </div>
</template>

<style scoped>
.list-wrapper {
  width: 97%;
  height: 95%;
}
</style>
