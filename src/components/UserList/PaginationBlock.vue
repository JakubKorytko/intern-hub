<script setup lang="ts">
import PaginationButton from '@/components/UserList/PaginationButton.vue'

const props = withDefaults(
  defineProps<{
    currentPage: number
    pages: number
    changePage: (page: number) => void
  }>(),
  {
    currentPage: 1,
    pages: 1,
    changePage: () => {},
  },
)
</script>

<template>
  <div class="inline-block">
    <pagination-button
      :selectable="props.currentPage - 1 > 0"
      :selectPage="
        () => {
          props.changePage(props.currentPage - 1)
        }
      "
      :active="false"
      text="«"
    />
    <template v-if="props.pages !== 0">
      <template v-for="page in props.pages" :key="page">
        <pagination-button
          :active="page === props.currentPage"
          :selectable="page !== props.currentPage"
          :text="String(page)"
          :selectPage="
            () => {
              props.changePage(page)
            }
          "
        />
      </template>
    </template>
    <pagination-button
      v-else
      :active="true"
      :selectable="false"
      :text="String(1)"
      :selectPage="() => {}"
    />
    <pagination-button
      :active="false"
      :selectPage="
        () => {
          props.changePage(props.currentPage + 1)
        }
      "
      :selectable="props.currentPage + 1 <= props.pages"
      text="»"
    />
  </div>
</template>
