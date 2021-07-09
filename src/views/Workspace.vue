<script>
import Acct from '../components/acct/acct'
import Dates from '../components/dates/dates';
import Operations from '../components/operations/operations';

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
  <div class="mt-4">
    <component :is="component.page"/>
  </div>
</template>

<style lang="scss" scoped>
</style>
