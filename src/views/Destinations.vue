<template>
  <main>
    <div class="container">
      <p v-for="destination in destinations" :key="destination.id">
        {{ destination.name }}
      </p>
    </div>
  </main>
</template>

<script>
import gql from "graphql-tag";

export default {
  data() {
    return {
      destinations: []
    };
  },
  apollo: {
    destinations: gql`
      {
        destinations {
          name
        }
      }
    `
  }
};
</script>

<style lang="scss" scoped>
.container {
  @include container;
}
</style>
