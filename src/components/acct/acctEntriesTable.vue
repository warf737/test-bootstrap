<script>
import Controls from '../common/controls';
export default {
  name: 'acctEntriesTable',
  components: {
    Controls,
  },
  props: {
    entries: {
      type: Array,
      default: [],
    }
  },
  data() {
    return {
      isRowSelected: false,
    }
  },
  methods: {
    handleClickTableRow(row) {
      this.$emit('click-row', row);
      this.isRowSelected = true;
    },
    handleAddEdit(row) {
      this.$emit('add-edit', row);
    },
    handleDeleteRow(row) {
      this.$emit('delete-row', row);
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


    <controls
      table="entries"
      :is-visible="isRowSelected"
      @add-edit="handleAddEdit"
      @delete="handleDeleteRow"
    />

  </article>
</template>

<style lang="scss" scoped>
</style>
