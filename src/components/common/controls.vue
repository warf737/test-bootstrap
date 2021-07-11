<script>
export default {
  name: 'controls',
  props: {
    table: {
      type: String,
      default: '',
    },
    isVisible: {
      type: Boolean,
      default: false,
    }
  },
  methods: {
    handleAddEdit(row) {
      this.$emit('add-edit', { ...row, table: this.table })
    },
    handleDelete(row) {
      this.$emit('delete', { ...row, table: this.table });
    },
  },
};
</script>

<template>
  <div class="row justify-content-start col-md-6">
    <b-button
      size="sm"
      class="mr-2"
      variant="outline-success"
      @click="handleAddEdit({ type: 'Create' })"
    >
      Create row
    </b-button>
<!--    <template v-if="this.activeDate">-->
    <template v-if="isVisible">
      <b-button
        size="sm"
        class="mr-2"
        variant="outline-secondary"
        @click="handleAddEdit({ type: 'Edit' })"
      >
        Edit row
      </b-button>
      <b-button
        size="sm"
        class="mr-2"
        variant="outline-danger"
        @click="handleDelete({ type: 'Delete' })"
      >
        Delete row
      </b-button>

    </template>
  </div>
</template>

<style lang="scss" scoped>
</style>
