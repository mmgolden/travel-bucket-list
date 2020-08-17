<template>
  <BaseModal ref="baseModal">
    <template #title>
      Add a new destination
    </template>
    <template #body>
      <b-field label="Name" label-for="name">
        <b-input v-model="name" id="name" />
      </b-field>
    </template>
    <template #footer>
      <BaseButton outlined @click="closeModal">Cancel</BaseButton>
      <BaseButton @click="createDestination">Submit</BaseButton>
    </template>
  </BaseModal>
</template>

<script>
import gql from "graphql-tag";

import BaseModal from "@/components/base/BaseModal.vue";

export default {
  components: {
    BaseModal
  },
  data() {
    return {
      name: ""
    };
  },
  methods: {
    openModal() {
      this.$refs.baseModal.openModal();
    },
    closeModal() {
      this.$refs.baseModal.closeModal();
    },
    createDestination() {
      // We save the user input in case of an error
      const name = this.name;

      // We clear it early to give the UI a snappy feel
      this.name = "";

      // Call to the graphql mutation
      this.$apollo
        .mutate({
          mutation: gql`
            mutation($data: DestinationCreateInput!) {
              createDestination(data: $data) {
                id
                name
              }
            }
          `,
          variables: {
            data: {
              name
            }
          }
        })
        .then(data => {
          console.log(data);
          this.$refs.baseModal.closeModal();
        })
        .catch(error => {
          console.error(error);
          // We restore the initial user input
          this.name = name;
        });
    }
  }
};
</script>

<style lang="scss" scoped>
::v-deep .card {
  @media screen and (min-width: 992px) {
    width: 400px;
  }
}
</style>
