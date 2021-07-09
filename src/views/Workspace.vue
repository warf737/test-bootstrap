<script>
import Acct from '../components/acct';
import Dates from '../components/dates';
import Operations from '../components/operations';

export default {
  name: 'Workspace',
  components: {
    Acct,
    Dates,
    Operations,
  },
  data () {
    return {
    };
  },
  computed: {
    component() {
      return this.$route.meta;
    }
  },
  methods: {},
};
</script>

<template>
    <component class="mt-4" :is="component.page"/>
</template>

<style lang="scss" scoped>
</style>
