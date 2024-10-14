<script setup lang="ts">
const imgUrl =
  'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png'
</script>

<template>
  <div class="flex flex-col bg-green-400" style="width: 95%; height: 95%">
    <div class="basis-10/12 bg-blue-700 flex justify-center items-center">
      <img :src="imgUrl" class="w-2/6 rounded-full" />
    </div>
    <div class="basis-2/12 bg-orange-400 flex justify-center items-center">
      <button class="bg-white w-11/12 h-4/6">Change Photo</button>
    </div>
  </div>
</template>
