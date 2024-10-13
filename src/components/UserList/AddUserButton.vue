<template>
  <div class="flex items-center md:items-start h-12 w-32">
    <RouterLink to="/addUser">
      <button
        class="w-32 h-10 add-user-button flex items-center justify-evenly text-white"
      >
        <i class="fa fa-plus"></i>
        Add User
      </button>
    </RouterLink>
  </div>
</template>

<style scoped>
.add-user-button {
  background-color: #459672;
  border-radius: 1.7rem;
  padding: 0 0.8rem;
}
</style>
