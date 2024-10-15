<script setup lang="ts">
import PaginationBlock from '@/components/UserList/PaginationBlock.vue'
import ListWrapper from '@/components/UserList/ListWrapper.vue'
import { onMounted, ref } from 'vue'
import { getAllUsers } from '@/services/reqres.api'
import { simulatePagesOnFilteredData } from '@/utils/searchUsers.util'
import type { IPage } from '@/types/reqres.api.type'

const emptyPageObject: IPage = {
  page: 1,
  per_page: 0,
  total: 0,
  total_pages: 0,
  data: [],
}

const data = ref<IPage>(emptyPageObject)
const filteredData = ref<IPage>(emptyPageObject)
const currentPage = ref(1)
const oldSearchValue = ref('')
const searchValue = ref('')

const usersPerPage = 5

const changePage = (page: number) => {
  const isSearchEmpty = searchValue.value === ''

  if (isSearchEmpty && (page > data.value.total_pages || page < 1)) return
  if (!isSearchEmpty && (page > filteredData.value.total_pages || page < 1))
    return

  currentPage.value = page
  if (isSearchEmpty) fetchData()
  else fetchFilteredData()
}

const fetchData = async () =>
  (data.value = await getAllUsers(usersPerPage, currentPage.value))

const fetchFilteredData = async () =>
  (filteredData.value = await simulatePagesOnFilteredData(
    searchValue.value,
    currentPage.value,
    usersPerPage,
  ))

const updatePages = (newValue: string) => {
  if (newValue === '' || oldSearchValue.value === '') {
    currentPage.value = 1
    fetchData()
  } else {
    fetchFilteredData()
  }
  oldSearchValue.value = newValue
}

onMounted(fetchData)
</script>

<template>
  <div class="flex flex-col w-full h-full">
    <div
      class="list-wrapper-bg justify-center flex items-center overflow-hidden bg-white"
    >
      <list-wrapper
        v-model="searchValue"
        @update:modelValue="updatePages"
        :pages="searchValue === '' ? data : filteredData"
      />
    </div>
    <div
      class="pagination-block-wrapper flex items-center justify-center md:justify-normal"
    >
      <pagination-block
        v-if="searchValue === ''"
        :currentPage="currentPage"
        :pages="data.total_pages"
        :changePage="changePage"
      />
      <pagination-block
        v-else
        :currentPage="currentPage"
        :pages="filteredData.total_pages"
        :changePage="changePage"
      />
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
