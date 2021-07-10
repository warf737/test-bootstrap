<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'dates',
  data () {
    return {
      activeDate: null,
    };
  },
  computed: {
    ...mapGetters([
      'opDates',
      'entries',
    ]),
    filteredEntries() {
      return this.entries.filter(({ OpDate }) => OpDate === this.activeDate);
      // return this.entries;
    }
  },
  created() {
    this.fetchOpDates();
    this.fetchEntries();
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
