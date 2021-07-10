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
  props: {
    component: {
      type: String,
      required: true,
    }
  }
};
</script>

<template>
  <div class="mt-4">
    <component :is="component.page"/>
  </div>
</template>

<style lang="scss" scoped>
</style>
