<script setup lang="ts">
import { RouterView, useRouter } from 'vue-router'
import { watch, ref } from 'vue'

const routeHeader: Record<string, string> = {
  home: 'User List',
  addUser: 'Add User',
  editUser: 'Edit User',
}

const getCurrentPageName = (routeName: string) => {
  const routeHeaderName = routeName ? routeName.toString() : ''
  return routeHeader[routeHeaderName]
}

const router = useRouter()
const currentPageName = ref(
  getCurrentPageName(router.currentRoute.value.name as string),
)

watch(
  () => router.currentRoute.value.name,
  newPath => {
    currentPageName.value = getCurrentPageName(String(newPath))
  },
)
</script>

<template>
  <main class="h-full w-full flex justify-center items-center">
    <div class="min-w-max w-4/5 mx-auto min-h-max h-5/6 flex flex-col">
      <div class="basis-1/12">
        <h1 class="text-4xl">{{ currentPageName }}</h1>
      </div>
      <div class="content-wrapper basis-11/12">
        <RouterView />
      </div>
    </div>
  </main>
</template>

<style scoped>
h1 {
  color: #43484f;
}
</style>
