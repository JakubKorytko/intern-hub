<template>
  <div class="flex flex-col bg-red-600" style="width: 95%; height: 95%">
    <div class="flex basis-1/2 bg-pink-600">
      <div class="flex flex-row bg-green-400 w-full h-full">
        <div class="basis-1/2 bg-pink-600 flex items-center">
          <div class="w-11/12">
            <label for="firstname">First Name</label>
            <input id="firstname" class="w-full py-1 pl-3 mt-2 rounded-md" type="text" placeholder="First Name" />
          </div>
        </div>
        <div class="basis-1/2 bg-yellow-600 flex items-center">
          <div class="w-11/12">
            <label for="firstname">Last Name</label>
            <input class="w-full py-1 pl-3 mt-2 rounded-md" type="text" placeholder="Last Name" />
          </div>
        </div>
      </div>
    </div>
    <div class="flex basis-1/2 items-end bg-blue-600">
      <button class="add-user-button text-white px-7 py-2 rounded-md">Add User</button>
    </div>
  </div>
</template>

<style scoped>
input {
  border: 1px solid #ced5da;
}

.add-user-button {
  background-color: #1e9067;
  font-size: 0.9rem
}
</style>
