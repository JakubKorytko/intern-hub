<template>
  <div class="h-12 w-full md:w-96">
    <input type="text" placeholder="Search for users..." class="h-full md:h-4/6 search-bar"/>
    <button type="submit" class="search-bar-button h-full md:h-4/6">
      <i class="fa fa-search"></i>
    </button>
  </div>
</template>

<style scoped>
.search-bar, .search-bar-button {
  background-color: #f8f9fa;
  color: #747888;
}

.search-bar, .search-bar-button {
  float: left;
}

.search-bar {
 width: 87%;
  padding-left: 0.7rem;
}

.search-bar-button {
  width: 13%;
}

.search-bar::after {
  content: "";
  clear: both;
}

</style>
