<script setup lang="ts">
import ListRow from '@/components/UserList/ListRow.vue'
import type { IPage } from '@/types/api'

const props = withDefaults(defineProps<{data: IPage}>(), {
  data: {}
})

</script>

<template>
  <table class="w-full interns-list">
    <thead>
      <tr>
        <th class="invisible select-none">Table</th>
        <th>Full name</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      <template v-for="User in props.data.data" :key="User.id">
        <list-row
          :image-url="User.avatar"
          :name="User.first_name.concat(' ', User.last_name)"
        />
      </template>
    </tbody>
  </table>
</template>
