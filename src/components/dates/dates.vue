<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'dates',
  props: {
    opDates: {
      type: Array,
      default: [],
    },
    entries: {
      type: Array,
      default: [],
    }
  },
  data () {
    return {
      activeDate: null,
      activeEntry: null,
    };
  },
  computed: {
    filteredEntries() {
      return this.entries.filter(({ OpDate }) => OpDate === this.activeDate?.OpDate);
    }
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
      this.$emit('delete-row', { ...row, data: data })
    }
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

      <div class="row justify-content-start col-md-6">
        <b-button
          size="sm"
          class="mr-2"
          variant="outline-success"
          @click="handleAddEdit({ type: 'Create', table: 'dates' })"
        >
          Create row
        </b-button>
        <template v-if="this.activeDate">
          <b-button
            size="sm"
            class="mr-2"
            variant="outline-secondary"
            @click="handleAddEdit({ type: 'Edit', table: 'dates' })"
          >
            Edit row
          </b-button>
          <b-button
            size="sm"
            class="mr-2"
            variant="outline-danger"
            @click="handleDeleteRow({ type: 'Delete', table: 'dates' })"
          >
            Delete row
          </b-button>

        </template>
      </div>

    </article>

    <article class="mt-4" v-if="filteredEntries.length > 0">
      <div class="bg-success text-light mb-4">Проводки операционного дня</div>
      <b-table
        selectable
        select-mode="single"
        :items="filteredEntries"
        @row-clicked="handleSelectEntry"
      />
      <div class="row justify-content-start col-md-6">
        <b-button
          size="sm"
          class="mr-2"
          variant="outline-success"
          @click="handleAddEdit({ type: 'Create', table: 'entries' })"
        >
          Create row
        </b-button>
        <template v-if="this.activeEntry">
          <b-button
            size="sm"
            class="mr-2"
            variant="outline-secondary"
            @click="handleAddEdit({ type: 'Edit', table: 'entries' })"
          >
            Edit row
          </b-button>
          <b-button
            size="sm"
            class="mr-2"
            variant="outline-danger"
            @click="handleDeleteRow({ type: 'Delete', table: 'entries' })"
          >
            Delete row
          </b-button>

        </template>
      </div>
    </article>

  </section>
</template>

<style lang="scss" scoped>
</style>
