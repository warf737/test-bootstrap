<script>
import { mapActions, mapGetters } from 'vuex';
import OperationsEntriesTable from './OperationsEntriesTable';

export default {
  name: 'operations',
  components: {
    OperationsEntriesTable
  },
  data() {
    return {
      selectedEntry: null,
    };
  },
  props: {
    entries: {
      type: Array,
      default: [],
    }
  },
  methods: {
    ...mapActions([
      'fetchEntries',
    ]),
    handleSelectTableRow(row) {
      this.selectedEntry = [];
      this.selectedEntry.push({
        AcctNumCr: row.AcctNumCr,
        AcctNumDB: row.AcctNumDB,
        Amount: row.Amount,
      });
    }
  },
};
</script>

<template>
  <section>
    <article>
      <div class="bg-secondary text-light mb-4">Проводки</div>
      <b-table
        hover
        selectable
        select-mode="single"
        :items="entries"
        @row-clicked="handleSelectTableRow"
      />
    </article>

    <operations-entries-table :entries="selectedEntry" v-if="selectedEntry"/>

  </section>
</template>

<style lang="scss" scoped>
</style>
