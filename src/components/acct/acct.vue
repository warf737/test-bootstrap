<script>
import { mapActions, mapGetters } from 'vuex';
import acctPositionTable from './acctPositionTable';
import acctEntriesTable from './acctEntriesTable';

export default {
  name: 'Acct',
  components: {
    acctPositionTable,
    acctEntriesTable,
  },
  props: {
    opDates: {
      type: Array,
      default: [],
    },
    acctPositions: {
      type: Array,
      default: [],
    },
    entries: {
      type: Array,
      default: [],
    },
  },
  data() {
    return {
      activeAcct: null,
    };
  },
  computed: {
    filteredEntries() {
      return this.entries.filter(({ AcctNumCr, AcctNumDB }) => this.activeAcct?.AcctNum === AcctNumCr || this.activeAcct?.AcctNum === AcctNumDB);
    },
    dates() {
      return this.opDates.map(({ OpDate }) => OpDate);
    },
  },

  methods: {
    handleSelectAcct(row) {
      this.activeAcct = row;
    },
    handleSelectEntry(row) {
      this.activeEntry = row;
    },
    handleOpenEditForm(row) {
      const data = row.table === 'acct-pos'? this.activeAcct : this.activeEntry;
      this.$emit('add-edit', { ...row, data: data });
    },
    handleDeleteRow(row) {
      const data = row.table === 'acct-pos'? this.activeAcct : this.activeEntry;
      this.$emit('delete-row', { ...row, data: data })
    }
  },
};
</script>

<template>
  <section>
    <acct-position-table
      :dates="dates"
      :acctPositions="acctPositions"
      @click-row="handleSelectAcct"
      @add-edit="handleOpenEditForm"
      @delete-row="handleDeleteRow"
    />
    <acct-entries-table
      v-if="filteredEntries.length > 0"
      :entries="filteredEntries"
      @click-row="handleSelectEntry"
      @add-edit="handleOpenEditForm"
      @delete-row="handleDeleteRow"
    />
  </section>
</template>

<style lang="scss" scoped>
</style>
