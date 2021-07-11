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
      'createAcctPos',
      'createOpDate',
      'createEntry',
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
      console.log('edit data', data);
      this.formData = data;
    },
    saveFrom(newForm) {
      switch (newForm.table) {
        case 'acct-pos':
          if (newForm.type === 'Create') {
            this.createAcctPos(newForm.newData);
          } else {
            this.updateAcctPosition(newForm.newData);
          }
          break;
        case 'dates':
          if (newForm.type === 'Create') {
            this.createOpDate(newForm.newData);
          } else {
            this.updateOpDates(newForm.newData);
          }
          break;
        case 'entries':
          if (newForm.type === 'Create') {
            this.createEntry(newForm.newData);
          } else {
            this.updateEntries(newForm.newData);
          }
          break;
        default: break
      }
    },
    deleteRow(row) {
      switch (row.table) {
        case 'acct-pos':
          this.deleteAcctPosition(row.data);
          break;
        case 'dates':
          this.deleteOpDates(row.data);
          break;
        case 'entries':
          this.deleteEntries(row.data);
          break;
        default: break;
      }
    }
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
      @delete-row="deleteRow"
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
