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
      return this.entries.filter(({ AcctNumCr, AcctNumDB }) => this.activeAcct === AcctNumCr || this.activeAcct === AcctNumDB);
    },
    dates() {
      return this.opDates.map(({ OpDate }) => OpDate);
    },
  },

  methods: {
    handleSelectTableRow(row) {
      this.activeAcct = row.AcctNum;
    },
    openEditForm() {
      this.$emit('open-edit');
    }
  },
};
</script>

<template>
  <section>
    <acct-position-table
      :dates="dates"
      :acctPositions="acctPositions"
      @click-row="handleSelectTableRow"
      @open-edit="openEditForm"
    />
    <acct-entries-table
      v-if="filteredEntries.length > 0"
      :entries="filteredEntries"
    />
  </section>
</template>

<style lang="scss" scoped>
</style>
