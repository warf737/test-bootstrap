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
    handleClickTableRow(row) {
      this.activeAcct = row.AcctNum;
    },
  },
};
</script>

<template>
  <div>
    <acct-position-table
      :dates="dates"
      :acctPositions="acctPositions"
      @click-row="handleClickTableRow"
    />
    <acct-entries-table
      v-if="filteredEntries.length > 0"
      :entries="filteredEntries"
    />
  </div>
</template>

<style lang="scss" scoped>
</style>
