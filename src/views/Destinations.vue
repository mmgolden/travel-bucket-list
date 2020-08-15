<template>
  <div>
    <p v-for="destination in destinations" :key="destination.id">
      {{ destination.name }}
    </p>
  </div>
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
