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
  created() {

    /**
     * Проверка чтобы данные не грузились из моков, если они уже загружены,
     * т.к. они уже могут быть отредактированы в локальном хранилище
     */
    if (this.opDates.length === 0) {
      this.fetchOpDates();
    }

    /**
     * Проверка чтобы данные не грузились из моков, если они уже загружены,
     * т.к. они уже могут быть отредактированы в локальном хранилище
     */
    if (this.acctPositions.length === 0) {
      this.fetchAcctPositions();
    }

    /**
     * Проверка чтобы данные не грузились из моков, если они уже загружены,
     * т.к. они уже могут быть отредактированы в локальном хранилище
     */
    if (this.entries.length === 0) {
      this.fetchEntries();
    }
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
