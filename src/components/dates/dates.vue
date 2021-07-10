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
  },
};
</script>

<template>
  <div>
    <div class="bg-success text-light mb-4">Опердни</div>
    <b-table :items="opDates"/>
  </div>
</template>

<style lang="scss" scoped>
</style>
