<script>
import { mapActions, mapGetters } from 'vuex';
import { CUSTOM_OPERATIONS_TABLE_FIELDS } from '../../constants';

export default {
  name: 'operations',
  CUSTOM_OPERATIONS_TABLE_FIELDS: CUSTOM_OPERATIONS_TABLE_FIELDS,
  data () {
    return {
      selectedEntry: null,
    };
  },
  created() {
    this.fetchEntries();
  },
  computed: {
    ...mapGetters([
      'entries',
    ]),
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
      <b-table hover :items="entries" @row-clicked="handleSelectTableRow"/>
    </article>

    <article class="mt-4">
      <div class="bg-secondary text-light mb-4">Счета проводок</div>
      <b-table :items="selectedEntry" :fields="$options.CUSTOM_OPERATIONS_TABLE_FIELDS">

        <template #thead-top="data">
          <b-tr>
            <b-th variant="secondary" colspan="2">Acct's</b-th>
            <b-th variant="danger">Amount</b-th>
          </b-tr>
        </template>

      </b-table>
    </article>

  </section>
</template>

<style lang="scss" scoped>
</style>
