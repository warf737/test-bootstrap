<script>
import { ACCT_POS_TABLE_FIELDS } from '../../constants';
import { format, max, parseISO } from 'date-fns';
export default {
  name: 'acctPositionTable',
  ACCT_POS_TABLE_FIELDS: ACCT_POS_TABLE_FIELDS,
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
  data () {
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
    }
  },
  methods: {
    handleClickTableRow(row) {
      this.$emit('click-row', row);
    },
    setupDate() {
      const lastDate = max(this.dates.map(date => parseISO(date)));
      this.selectedDate = format(lastDate, 'yyyy-MM-dd');
    },
  },
};
</script>

<template>
  <div>
    <p class="bg-primary text-light">Счета с остатками на дату</p>
    <b-row align-h="end">
      <b-col cols="2">
        <b-form-select v-model='selectedDate' :options='this.dates'/>
      </b-col>
    </b-row>
    <b-table
      :items="acctPositionData"
      :fields="$options.ACCT_POS_TABLE_FIELDS"
      @row-clicked="handleClickTableRow"
    />
  </div>
</template>

<style lang="scss" scoped>
</style>
