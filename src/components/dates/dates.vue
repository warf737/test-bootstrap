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
    };
  },
  computed: {
    filteredEntries() {
      return this.entries.filter(({ OpDate }) => OpDate === this.activeDate);
    }
  },
  methods: {
    ...mapActions([
      'fetchOpDates',
      'fetchEntries',
    ]),
    handleSelectTableRow({ OpDate }) {
      this.activeDate = OpDate;
    },
  },
};
</script>

<template>
  <section>

    <article>
      <div class="bg-success text-light mb-4">Операционные дни</div>
      <b-table hover :items="opDates" @row-clicked="handleSelectTableRow"/>
    </article>

    <article class="mt-4" v-if="filteredEntries.length > 0">
      <div class="bg-success text-light mb-4">Проводки операционного дня</div>
      <b-table hover :items="filteredEntries"/>
    </article>

  </section>
</template>

<style lang="scss" scoped>
</style>
