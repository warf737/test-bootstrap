<script>
import Acct from '../components/acct/acct'
import Dates from '../components/dates/dates';
import Operations from '../components/operations/operations';
import Modal from './Modal';
import { mapActions, mapGetters, mapMutations } from 'vuex';

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
      formData: {},
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
      'createAcctPosition',
      'createOpDates',
      'createEntries',
      'updateAcctPosition',
      'updateOpDates',
      'updateEntries',
      'deleteAcctPosition',
      'deleteOpDates',
      'deleteEntries',
    ]),
    showModal() {
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
      this.formData = {};
    },
    addEditForm(data) {
      this.showModal();
      this.formData = data;
    },
    saveFrom(newForm) {
      switch (newForm.table) {
        case 'acct-pos':
          if (newForm.type === 'Create') {
            this.createAcctPosition(newForm.newData);
          } else {
            this.updateAcctPosition(newForm.newData);
          }
          break;
        default: break
      }
    },
  }
};
</script>

<template>
  <main class="mt-4">
    <component
      :is="component.page"
      :opDates="opDates"
      :acctPositions="acctPositions"
      :entries="entries"
      @add-edit="addEditForm"
    />

    <modal
      :is-open="isModalOpen"
      :external-data="formData"
      @close-modal="closeModal"
      @save-form="saveFrom"
    />
  </main>

</template>

<style lang="scss" scoped>
</style>
