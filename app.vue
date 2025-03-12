<template>
  <div class="myapp">
    <div class="main">
      <NuxtPage></NuxtPage>
    </div>
  </div>
</template>

<style lang="css" scoped>
.myapp {
  @apply bg-white lg:bg-gray-100 min-h-screen p-0 lg:p-12 font-opensans;
}

.main {
  @apply bg-white px-4 py-8 lg:p-12 rounded-lg w-full shadow min-h-screen lg:min-h-0;
}
</style>
