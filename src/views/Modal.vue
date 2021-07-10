<script>
export default {
  name: 'Modal',
  props: {
    isOpen: {
      type: Boolean,
      default: false,
    }
  },
  watch: {
    isOpen(newValue) {
      if(newValue) {
        this.$refs['my-modal'].show();
      } else {
        this.$refs['my-modal'].hide();
      }
    }
  },
  methods: {
    isModalClose() {
      this.$emit('close-modal');
    },
  },
};
</script>

<template>
  <b-modal ref="my-modal" hide-footer title="Edit data modal" @hide="isModalClose">
    <div class="d-block text-center">

    </div>
  </b-modal>
</template>

<style lang="scss" scoped>
</style>
