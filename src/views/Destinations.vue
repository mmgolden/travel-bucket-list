<template>
  <main>
    <div class="container">
      <!-- Loading -->
      <div v-if="$apollo.loading"><p>Loading...</p></div>

      <!-- Destinations -->
      <div v-else-if="destinations.length > 0">
        <p v-for="destination in destinations" :key="destination.id">
          {{ destination.name }}
        </p>
      </div>

      <!-- Empty -->
      <div v-else>
        <p>No destinations have been added yet.</p>
      </div>
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
