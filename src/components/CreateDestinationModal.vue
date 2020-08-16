<template>
  <BaseModal>
    <template #header>
      <div class="modal-header">
        <h2 class="modal-title">Add a new destination</h2>
        <x-icon size="16" class="icon" />
      </div>
    </template>
    <template #body>
      <input />
    </template>
    <template #footer>
      <div class="modal-footer">
        <BaseButton outlined>Cancel</BaseButton>
        <BaseButton>Submit</BaseButton>
      </div>
    </template>
  </BaseModal>
</template>

<script>
import BaseModal from "@/components/base/BaseModal.vue";

import { XIcon } from "vue-feather-icons";

export default {
  components: {
    BaseModal,
    XIcon
  }
};
</script>

<style lang="scss" scoped>
::v-deep .card {
  @media screen and (min-width: 992px) {
    width: 400px;
  }
}

.modal-header {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.modal-title {
  @include h2;
  color: $black;
}

.icon {
  cursor: pointer;
}

.modal-footer {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  .button {
    margin-left: 8px;
  }
}
</style>
