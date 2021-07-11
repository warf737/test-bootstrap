<script>
import { CUSTOM_TABLE_FIELDS } from '../../constants';
import { format, max, parseISO } from 'date-fns';
export default {
  name: 'acctPositionTable',
  CUSTOM_TABLE_FIELDS: CUSTOM_TABLE_FIELDS,
  props: {
    dates: {
      type: Array,
      default: [],
    },
    acctPositions: {
      type: Array,
      default: [],
    },
  },
  data() {
    return {
      selectedDate: null,
      isRowSelected: false,
    };
  },
  created() {
    if (this.dates.length > 0) {
      this.setupDate();
    } else {
      setTimeout(this.setupDate, 1000);
    }
  },
  computed: {
    // при выборе даты фильтрует все счета по этой дате
    acctPositionData() {
      return this.acctPositions.filter(({ OpDate }) => OpDate === this.selectedDate)
    },
  },
  methods: {
    handleClickTableRow(row) {
      this.$emit('click-row', row);
      this.isRowSelected = true;
    },
    setupDate() {
      const lastDate = max(this.dates.map(date => parseISO(date)));
      this.selectedDate = format(lastDate, 'yyyy-MM-dd');
    },
    handleAddEdit(button) {
      this.$emit('add-edit', button);
    },
    handleDeleteRow(row) {
      this.$emit('delete-row', row);
    },
  },
};
</script>

<template>
  <article>
    <p class="bg-primary text-light">Счета с остатками на дату</p>
    <b-row align-h="end" class="mb-4">
      <b-col cols="3">
        <b-form-select v-model='selectedDate' :options='this.dates'/>
      </b-col>
    </b-row>

    <b-table
      selectable
      select-mode="single"
      :items="acctPositionData"
      :fields="$options.CUSTOM_TABLE_FIELDS"
      @row-clicked="handleClickTableRow"
    >

    </b-table>

    <div class="row justify-content-start col-md-6">
      <b-button
        size="sm"
        class="mr-2"
        variant="outline-success"
        @click="handleAddEdit({ type: 'Create', table: 'acct-pos' })"
      >
          Create row
      </b-button>
      <template v-if="this.isRowSelected">
        <b-button
          size="sm"
          class="mr-2"
          variant="outline-secondary"
          @click="handleAddEdit({ type: 'Edit', table: 'acct-pos' })"
        >
          Edit row
        </b-button>
        <b-button
          size="sm"
          class="mr-2"
          variant="outline-danger"
          @click="handleDeleteRow({ type: 'Delete', table: 'acct-pos' })"
        >
          Delete row
        </b-button>

      </template>
    </div>
  </article>
</template>

<style lang="scss" scoped>
</style>
