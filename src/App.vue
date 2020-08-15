<template>
  <div id="app">
    <header>
      <div class="container">
        <h1 class="title">Travel Bucket List</h1>
      </div>
    </header>
    <router-view />
  </div>
</template>

<style lang="scss" scoped>
.container {
  @include container;
}

.title {
  @include h1;
  color: $black;
}
</style>
