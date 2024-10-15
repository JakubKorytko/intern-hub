<script setup lang="ts">
import PaginationBlock from '@/components/UserList/PaginationBlock.vue'
import ListWrapper from '@/components/UserList/ListWrapper.vue'
import { ref, onMounted } from 'vue';

const data = ref<IPage>({});
const error = ref<string | null>(null);
const currentPage = ref(1);
const usersPerPage = 5;

const changePage = (page: number) => {
  if (page > data.value.total_pages || page < data.value.pages) {
    return;
  }
  currentPage.value = page;
  fetchData();
  console.log(page);
}

const fetchData = async () => {
  try {
    const response = await fetch(`https://reqres.in/api/users?per_page=${usersPerPage}&page=${currentPage.value}`);

    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }

    data.value = await response.json();
  } catch (err) {
    error.value = err instanceof Error ? err.message : 'Nieznany blad';
  }
}

onMounted(fetchData);
</script>

<template>
  <div class="flex flex-col w-full h-full">
    <div
      class="list-wrapper-bg justify-center flex items-center overflow-hidden bg-white"
    >
      <list-wrapper :data="data" />
    </div>
    <div
      class="pagination-block-wrapper flex items-center justify-center md:justify-normal"
    >
      <pagination-block :currentPage="currentPage" :pages="data.total_pages" :changePage="changePage" />
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
