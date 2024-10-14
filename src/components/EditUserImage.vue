<script setup lang="ts">
const imgUrl =
  'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png'
</script>

<template>
  <div class="flex flex-col" style="width: 95%; height: 95%">
    <div class="basis-10/12 flex justify-center items-center">
      <img alt="profile picture" :src="imgUrl" class="w-2/6 rounded-full" />
    </div>
    <div class="basis-2/12 flex justify-center items-center">
      <button class="change-photo-button bg-white w-11/12 h-4/6 rounded-md">
        <i class="fa fa-camera" aria-hidden="true"></i>
        Change Photo
      </button>
    </div>
  </div>
</template>

<style scoped>
.change-photo-button {
  color: #68737c;
  border: 1px solid #ced5da;
}
</style>
