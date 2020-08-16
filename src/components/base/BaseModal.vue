<template>
  <b-modal
    :active.sync="isActive"
    has-modal-card
    trap-focus
    aria-role="dialog"
    aria-modal
  >
    <div class="card">
      <header class="card-header">
        <h2 class="modal-title">
          <slot name="title" />
        </h2>
      </header>
      <div class="card-content">
        <slot name="body" />
      </div>
      <footer class="card-footer">
        <div class="modal-footer">
          <slot name="footer" />
        </div>
      </footer>
    </div>
  </b-modal>
</template>

<script>
export default {
  data() {
    return {
      isActive: false
    };
  },
  methods: {
    openModal() {
      this.isActive = true;
    },
    closeModal() {
      this.isActive = false;
    }
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

.modal-title {
  @include h2;
  color: $black;
}

.card-content {
  padding: 16px;
}

.modal-footer {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  ::v-deep .button {
    margin-left: 8px;
  }
}
</style>
