<template>
  <BaseModal ref="baseModal">
    <template #title>
      Add a new destination
    </template>
    <template #body>
      <input />
    </template>
    <template #footer>
      <BaseButton outlined @click="closeModal">Cancel</BaseButton>
      <BaseButton>Submit</BaseButton>
    </template>
  </BaseModal>
</template>

<script>
import BaseModal from "@/components/base/BaseModal.vue";

export default {
  components: {
    BaseModal
  },
  methods: {
    openModal() {
      this.$refs.baseModal.openModal();
    },
    closeModal() {
      this.$refs.baseModal.closeModal();
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
