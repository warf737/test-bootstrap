<script>
import { mapActions, mapGetters } from 'vuex';
import Controls from '../common/controls';

export default {
  name: 'dates',
  components: {
    Controls,
  },
  props: {
    opDates: {
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
      activeDate: null,
      activeEntry: null,
    };
  },
  computed: {
    filteredEntries() {
      return this.entries.filter(({ OpDate }) => OpDate === this.activeDate?.OpDate);
    },
  },
  methods: {
    ...mapActions([
      'fetchOpDates',
      'fetchEntries',
    ]),
    handleSelectDate(row) {
      this.activeDate = row;
    },
    handleSelectEntry(row) {
      this.activeEntry = row;
    },
    handleAddEdit(row) {
      console.log(row);
      const data = row.table === 'dates' ? this.activeDate : this.activeEntry;
      this.$emit('add-edit', { ...row, data: data });
    },
    handleDeleteRow(row) {
      const data = row.table === 'dates' ? this.activeDate : this.activeEntry;
      this.$emit('delete-row', { ...row, data: data });
    },
  },
};
</script>

<template>
  <section>

    <article>
      <div class="bg-success text-light mb-4">Операционные дни</div>
      <b-table
        hover
        selectable
        select-mode="single"
        :items="opDates"
        @row-clicked="handleSelectDate"
      />

      <controls
        table="dates"
        :isVisible="Boolean(activeDate)"
        @add-edit="handleAddEdit"
        @delete="handleDeleteRow"
      />

    </article>

    <article class="mt-4" v-if="filteredEntries.length > 0">
      <div class="bg-success text-light mb-4">Проводки операционного дня</div>
      <b-table
        selectable
        select-mode="single"
        :items="filteredEntries"
        @row-clicked="handleSelectEntry"
      />

      <controls
        table="entries"
        :isVisible="Boolean(activeEntry)"
        @add-edit="handleAddEdit"
        @delete="handleDeleteRow"
      />
    </article>

  </section>
</template>

<style lang="scss" scoped>
</style>
