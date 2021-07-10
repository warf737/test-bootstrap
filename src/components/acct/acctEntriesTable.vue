<script>
export default {
  name: 'acctEntriesTable',
  props: {
    entries: {
      type: Array,
      default: [],
    }
  },
  methods: {},
};
</script>

<template>
  <article class="mt-4">
    <p class="bg-primary text-light">Проводки по счету</p>
    <b-table hover :items="entries"/>
  </article>
</template>

<style lang="scss" scoped>
</style>
