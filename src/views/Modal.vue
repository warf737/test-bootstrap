<script>
import { MODAL_FORM_FIELDS } from '../constants';

export default {
  MODAL_FORM_FIELDS: MODAL_FORM_FIELDS,
  name: 'Modal',
  props: {
    isOpen: {
      type: Boolean,
      default: false,
    },
    externalData: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      formData: {},
    }
  },
  watch: {
    isOpen(newValue) {
      if(newValue) {
        this.$refs['my-modal'].show();
      } else {
        this.$refs['my-modal'].hide();
      }
    },
    externalData(newVal) {
      switch (newVal.type) {
        case 'Create':
          const { table } = newVal;
          const fields = this.$options.MODAL_FORM_FIELDS[table]?.fields;
          this.formData = { ...fields } ;
          break;
        case 'Edit':
          this.formData = { ...this.externalData?.data };
          break;
        default:
          this.formData = {};
          break
      }
    },
  },
  computed: {
    title() {
      return this.externalData.type;
    },
  },
  methods: {
    isModalClose() {
      this.$emit('close-modal');
    },
    saveData() {
      const params = {
        type: this.externalData?.type,
        table: this.externalData?.table,
        newData: this.formData,
        oldData: this.externalData?.data
      }
      this.$emit('save-form', params);
    }
  },
};
</script>

<template>
  <b-modal ref="my-modal" :title="title" @hide="isModalClose" @ok="saveData">
    <div class="d-block text-center">
      <div v-for="({}, key, index) in formData" :key="index" class="mt-2">
        <p> {{ key }}</p>

        <b-form-datepicker v-if="key === 'OpDate'" v-model="formData[key]" class="mb-2"></b-form-datepicker>

        <b-form-input v-else v-model="formData[key]"></b-form-input>
      </div>
    </div>
  </b-modal>
</template>

<style lang="scss" scoped>
</style>
