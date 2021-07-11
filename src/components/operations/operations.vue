<script>
import { mapActions, mapGetters } from 'vuex';
import Controls from '../common/controls';

export default {
  name: 'operations',
  components: {
    Controls,
  },
  data () {
    return {
      selectedEntry: null,
    };
  },
  props: {
    entries: {
      type: Array,
      default: [],
    },
  },
  methods: {
    ...mapActions([
      'fetchEntries',
    ]),
    handleSelectTableRow (row) {
      this.selectedEntry = [];
      this.selectedEntry.push({
        AcctNumCr: row.AcctNumCr,
        AcctNumDB: row.AcctNumDB,
        Amount: row.Amount,
      });
    },
    handleAddEdit(row) {
      this.$emit('add-edit', { ...row, data: this.selectedEntry[0] });
    },
    handleDelete(row) {
      this.$emit('delete-row', { ...row, data: this.selectedEntry[0] })
    },
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

    <article class="mt-4" v-if="selectedEntry">
      <div class="bg-secondary text-light mb-4">Счета проводок</div>
      <b-table :items="selectedEntry">

        <template #thead-top="data">
          <b-tr>
            <b-th variant="secondary" colspan="2">Acct's</b-th>
            <b-th variant="danger">Amount</b-th>
          </b-tr>
        </template>
      </b-table>


      <controls
        table="entries"
        :isVisible="true"
        @add-edit="handleAddEdit"
        @delete="handleDelete"
      />
    </article>

  </section>
</template>

<style lang="scss" scoped>
</style>
