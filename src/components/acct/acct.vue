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
  data () {
    return {
      activeAcct: null,
    };
  },
  computed: {
    ...mapGetters([
      'opDates',
      'acctPositions',
      'entries',
    ]),
    filteredEntries() {
      return this.entries.filter(({ AcctNumCr, AcctNumDB }) => this.activeAcct === AcctNumCr || this.activeAcct === AcctNumDB);
    },
    dates() {
      return this.opDates.map(({ OpDate }) => OpDate);
    },
  },
  created () {
    this.fetchOpDates();
    this.fetchAcctPositions();
    this.fetchEntries();
  },
  methods: {
    ...mapActions([
      'fetchOpDates',
      'fetchAcctPositions',
      'fetchEntries',
    ]),
    handleSelectTableRow(row) {
      this.activeAcct = row.AcctNum;
    },
  },
};
</script>

<template>
  <section>
    <acct-position-table
      :dates="dates"
      :acctPositions="acctPositions"
      @click-row="handleSelectTableRow"
    />
    <acct-entries-table
      v-if="filteredEntries.length > 0"
      :entries="filteredEntries"
    />
  </section>
</template>

<style lang="scss" scoped>
</style>
