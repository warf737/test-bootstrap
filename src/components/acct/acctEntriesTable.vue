<script>
export default {
  name: 'acctEntriesTable',
  props: {
    entries: {
      type: Array,
      default: [],
    }
  },
  data() {
    return {
      selectedRow: null,
    }
  },
  methods: {
    handleClickTableRow(row) {
      this.selectedRow = row;
    },
    handleAddEdit(button) {
      this.$emit('add-edit', { ...button, data: this.selectedRow });
    },
    handleDeleteRow(row) {
      this.$emit('delete-row', { ...row, data: this.selectedRow });
    },
  },
};
</script>

<template>
  <article class="mt-4">
    <p class="bg-primary text-light">Проводки по счету</p>
    <b-table
      selectable
      select-mode="single"
      :items="entries"
      @row-clicked="handleClickTableRow"
    />

    <div class="row justify-content-start col-md-6">
      <b-button
        size="sm"
        class="mr-2"
        variant="outline-success"
        @click="handleAddEdit({ type: 'Create', table: 'entries' })"
      >
        Create row
      </b-button>
      <div v-if="this.selectedRow">
        <b-button
          size="sm"
          class="mr-2"
          variant="outline-secondary"
          @click="handleAddEdit({ type: 'Edit', table: 'entries' })"
        >
          Edit row
        </b-button>
        <b-button
          size="sm"
          class="mr-2"
          variant="outline-danger"
          @click="handleDeleteRow({ type: 'Delete', table: 'entries' })"
        >
          Delete row
        </b-button>
      </div>
    </div>

  </article>
</template>

<style lang="scss" scoped>
</style>
