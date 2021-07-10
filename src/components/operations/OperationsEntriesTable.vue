<script>
export default {
  name: 'OperationsEntriesTable',
  props: {
    entries: {
      type: Array,
      default: [],
    }
  },
};
</script>

<template>
  <article class="mt-4">
    <div class="bg-secondary text-light mb-4">Счета проводок</div>
    <b-table :items="entries">

      <template #thead-top="data">
        <b-tr>
          <b-th variant="secondary" colspan="2">Acct's</b-th>
          <b-th variant="danger">Amount</b-th>
        </b-tr>
      </template>

    </b-table>
  </article>
</template>

<style lang="scss" scoped>
</style>
