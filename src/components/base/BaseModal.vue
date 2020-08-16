<template>
  <b-modal
    :active.sync="isActive"
    has-modal-card
    trap-focus
    :destroy-on-hide="false"
    aria-role="dialog"
    aria-modal
  >
    <div class="card">
      <header class="card-header">
        <slot name="header" />
      </header>
      <div class="card-content">
        <slot name="body" />
      </div>
      <footer class="card-footer">
        <slot name="footer" />
      </footer>
    </div>
  </b-modal>
</template>

<script>
export default {
  data() {
    return {
      isActive: true
    };
  }
};
</script>

<style lang="scss" scoped>
.card {
  border-radius: 12px;
}

.card-header,
.card-footer {
  padding: 12px 16px;
}

.card-content {
  padding: 16px;
}
</style>
