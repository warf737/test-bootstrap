<script>
import { mapActions, mapGetters } from 'vuex';
import { CUSTOM_TABLE_FIELDS } from '../../constants';

export default {
  name: 'operations',
  CUSTOM_TABLE_FIELDS: CUSTOM_TABLE_FIELDS,
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
      this.selectedEntry.push(
        {
          'AcctNum': `cr: ${row.AcctNumCr}, db: ${row.AcctNumDB}`,
          'Balance': row.Amount,
        },
      );
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
      <b-table :items="selectedEntry" :fields="$options.CUSTOM_TABLE_FIELDS"/>
    </article>

  </section>
</template>

<style lang="scss" scoped>
</style>
