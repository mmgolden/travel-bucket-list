<template>
  <main>
    <div class="container">
      <BaseButton @click="openCreateDestinationModal">
        Add destination
      </BaseButton>

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

    <!-- Modal -->
    <CreateDestinationModal ref="createDestinationModal" />
  </main>
</template>

<script>
import gql from "graphql-tag";

import CreateDestinationModal from "@/components/CreateDestinationModal.vue";

export default {
  components: {
    CreateDestinationModal
  },
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
  },
  methods: {
    openCreateDestinationModal() {
      this.$refs.createDestinationModal.openModal();
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  @include container;
}

.button {
  margin-bottom: 30px;
}
</style>
