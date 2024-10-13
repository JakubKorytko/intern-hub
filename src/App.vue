<script setup lang="ts">
import { RouterView } from 'vue-router'

const routeHeader = {
  home: 'User List',
  add: 'Add User',
}
</script>

<template>
  <main class="h-full w-full flex justify-center items-center">
    <div class="min-w-max w-4/5 mx-auto min-h-max h-5/6 flex flex-col">
      <div class="basis-1/12">
        <h1 class="text-4xl">{{ routeHeader[$route.name] }}</h1>
      </div>
      <div class="content-wrapper overflow-hidden basis-11/12">
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
