<script>
import { mapActions, mapGetters } from 'vuex';
export default {
  name: 'Acct',
  data () {
    return {};
  },
  computed: {
    ...mapGetters(['accounts'])
  },
  created() {
    this.fetchAccounts();
  },
  methods: {
    ...mapActions(['fetchAccounts'])
  },
};
</script>

<template>
  <div class="bg-primary">acct</div>
</template>

<style lang="scss" scoped>
</style>
