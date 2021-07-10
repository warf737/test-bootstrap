<script>
import Acct from '../components/acct/acct'
import Dates from '../components/dates/dates';
import Operations from '../components/operations/operations';
import Modal from './Modal';
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'Workspace',
  components: {
    Acct,
    Dates,
    Operations,
    Modal,
  },
  props: {
    component: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      isModalOpen: false,
    }
  },
  computed: {
    ...mapGetters([
      'opDates',
      'acctPositions',
      'entries',
    ]),
  },
  created() {
    this.fetchOpDates();
    this.fetchAcctPositions();
    this.fetchEntries();
  },
  methods: {
    ...mapActions([
      'fetchOpDates',
      'fetchAcctPositions',
      'fetchEntries',
    ]),
    showModal() {
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
    }
  }
};
</script>

<template>
  <div class="mt-4">
    <component
      :is="component.page"
      :opDates="opDates"
      :acctPositions="acctPositions"
      :entries="entries"

      @open-edit="showModal"
    />

    <modal
      :is-open="isModalOpen"
      @close-modal="closeModal"
    />
  </div>

</template>

<style lang="scss" scoped>
</style>
