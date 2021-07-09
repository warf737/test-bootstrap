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
      console.log('click-click', row);
      this.activeAcct = row.AcctNum;
    },
  },
};
</script>

<template>
  <div>

    <acct-position-table
      :dates="opDates"
      :acctPositions="acctPositions"
      @click-row="handleClickTableRow"
    />


    <acct-entries-table
      :entries="filteredEntries"
    />

  </div>
</template>

<style lang="scss" scoped>
</style>
