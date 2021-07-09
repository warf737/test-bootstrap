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
  <div class="mt-4">
    <p class="bg-primary text-light">Проводки по счету</p>
    <b-table
      :items="entries"
    />
  </div>
</template>

<style lang="scss" scoped>
</style>
