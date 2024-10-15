<template>
  <div
    class="h-full lg:h-3/5 w-100 flex flex-col-reverse lg:flex-row justify-between"
  >
    <div
      class="bg-white edit-user-data-wrapper flex justify-center items-center rounded-md"
    >
      <slot name="data"></slot>
    </div>
    <div
      class="basis-5/12 edit-image-wrapper lg:basis-4/12 flex justify-center items-center bg-white rounded-md"
    >
      <slot name="image"></slot>
    </div>
  </div>
</template>

<style scoped>
.edit-user-data-wrapper {
  flex-basis: 63.666667%;
  box-shadow: 0 0 6px 6px rgba(234, 234, 237, 1);
}

@media (max-width: 1024px) {
  .edit-user-data-wrapper {
    flex-basis: 55.333333%;
  }
}

.edit-image-wrapper {
  box-shadow: 0 0 6px 6px rgba(234, 234, 237, 1);
}
</style>
