<template>
  <div class="flex flex-col bg-red-600" style="width: 95%; height: 95%">
    <div class="flex basis-1/2 bg-pink-600">
      <div class="flex flex-row bg-green-400 w-full h-full">
        <div class="basis-1/2 bg-pink-600 flex items-center">
          <input class="w-11/12" type="text" placeholder="First Name" />
        </div>
        <div class="basis-1/2 bg-yellow-600 flex items-center">
          <input class="w-11/12" type="text" placeholder="Last Name" />
        </div>
      </div>
    </div>
    <div class="flex basis-1/2 items-end bg-blue-600">
      <button class="bg-green-600 text-white px-7 py-2" style="font-size: 0.9rem">Add User</button>
    </div>
  </div>
</template>
<script setup lang="ts">
</script>
