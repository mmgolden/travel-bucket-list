<template>
  <b-button :type="type">
    <slot />
  </b-button>
</template>

<script>
export default {
  props: {
    type: {
      validator: function(value) {
        return ["is-primary"].indexOf(value) !== -1;
      },
      required: false,
      default: "is-primary"
    }
  }
};
</script>

<style lang="scss" scoped>
::v-deep span {
  font-family: "Heebo", sans-serif;
}
</style>
