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
  watch: {
    selectedDate() {
      this.handleClickTableRow({ AcctNum: null })
    },
  },
  methods: {
    handleClickTableRow(row) {
      this.$emit('click-row', row);
    },
    setupDate() {
      const lastDate = max(this.dates.map(date => parseISO(date)));
      this.selectedDate = format(lastDate, 'yyyy-MM-dd');
    },
    openEditForm() {
      this.$emit('open-edit');
    },
    handleDeleteRow(row) {
      console.log('coming soon delete this row');
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
      hover
      :items="acctPositionData"
      :fields="$options.CUSTOM_TABLE_FIELDS"
      @row-clicked="handleClickTableRow"
    >

      <template #cell(Options)="row">
        <b-button-group class="mr-2 ml-2">
          <b-button size="sm" @click="openEditForm" variant="outline-secondary"> Edit
          </b-button>
          <b-button size="sm" @click="handleDeleteRow" variant="outline-danger"> Delete
          </b-button>
        </b-button-group>
      </template>

    </b-table>
  </article>
</template>

<style lang="scss" scoped>
</style>
