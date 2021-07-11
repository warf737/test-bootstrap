import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);


import { ACCT_POS, OP_ENTRY, OP_DATE } from './mocks/mock';

export default new Vuex.Store({
  state: {
    acct_positions: [],
    entries: [],
    op_dates: [],
  },
  getters: {
    acctPositions: state => state.acct_positions,
    entries: state => state.entries,
    opDates: state => state.op_dates,
  },
  mutations: {
    SET_ACCT_POSITIONS: (state, payload) => {
      state.acct_positions = payload;
    },
    SET_ENTRIES: (state, payload) => {
      state.entries = payload;
    },
    SET_OP_DATES: (state, payload) => {
      state.op_dates = payload;
    },
  },
  actions: {
    fetchAcctPositions ({ commit }) {
      axios.get('https://jsonplaceholder.typicode.com/posts',)
        .then(() => {
          const { AcctPos } = ACCT_POS;
          commit('SET_ACCT_POSITIONS', AcctPos);
      })
      .catch((e) => {
        console.log(e);
      })
    },
    fetchEntries ({ commit }) {
      axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(() => {
          const { OpEntry } = OP_ENTRY;
          commit('SET_ENTRIES', OpEntry);
      })
      .catch((e) => {
        console.log(e);
      })
    },
    fetchOpDates ({ commit }) {
      axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(() => {
          const { OpDate } = OP_DATE;
          commit('SET_OP_DATES', OpDate);
      })
      .catch((e) => {
        console.log(e);
      })
    },



    createAcctPos({ dispatch }, payload) {
      console.log('create acct pos', payload);
      axios.post('https://jsonplaceholder.typicode.com/posts', payload)
        .then(() => {
          dispatch('fetchAcctPositions');
          dispatch('fetchEntries');
          dispatch('fetchOpDates');
        })
        .catch((e) => {
          console.log(e);
        })
    },
    createEntry({ dispatch }, payload) {
      console.log('create entry', payload);
      axios.post('https://jsonplaceholder.typicode.com/posts', payload)
        .then(() => {
          dispatch('fetchAcctPositions');
          dispatch('fetchEntries');
          dispatch('fetchOpDates');
        })
        .catch((e) => {
          console.log(e);
        })
    },
    createOpDate({ dispatch }, payload) {
      console.log('create date', payload);
      axios.post('https://jsonplaceholder.typicode.com/posts', payload)
        .then(() => {
          dispatch('fetchAcctPositions');
          dispatch('fetchEntries');
          dispatch('fetchOpDates');
        })
        .catch((e) => {
          console.log(e);
        })
    },




    updateAcctPosition({ dispatch }, payload) {
      console.log('update acct pos', payload);
      axios.put('https://jsonplaceholder.typicode.com/posts/1', payload)
        .then(() => {
          dispatch('fetchAcctPositions');
          dispatch('fetchEntries');
          dispatch('fetchOpDates');
        })
        .catch((e) => {
          console.log(e);
        })
    },
    updateEntries({ dispatch }, payload) {
      console.log('update entries', payload);
      axios.put('https://jsonplaceholder.typicode.com/posts/1', payload)
        .then(() => {
          dispatch('fetchAcctPositions');
          dispatch('fetchEntries');
          dispatch('fetchOpDates');
        })
        .catch((e) => {
          console.log(e);
        })
    },
    updateOpDates({ dispatch }, payload) {
      console.log('update dates', payload);
      axios.put('https://jsonplaceholder.typicode.com/posts/1', payload)
        .then(() => {
          dispatch('fetchAcctPositions');
          dispatch('fetchEntries');
          dispatch('fetchOpDates');
        })
        .catch((e) => {
          console.log(e);
        })
    },




    deleteAcctPosition({ dispatch }, payload) {
      console.log('del acct pos', payload);
      axios.delete('https://jsonplaceholder.typicode.com/posts/1', payload)
        .then(() => {
          dispatch('fetchAcctPositions');
          dispatch('fetchEntries');
          dispatch('fetchOpDates');
        })
        .catch((e) => {
          console.log(e);
        })
    },
    deleteEntries({ dispatch }, payload ) {
      console.log('del entries', payload);
      axios.delete('https://jsonplaceholder.typicode.com/posts/1', payload)
        .then(() => {
          dispatch('fetchAcctPositions');
          dispatch('fetchEntries');
          dispatch('fetchOpDates');
        })
        .catch((e) => {
          console.log(e);
        })
    },
    deleteOpDates({ dispatch }, payload) {
      console.log('del dates', payload);
      axios.delete('https://jsonplaceholder.typicode.com/posts/1', payload)
        .then(() => {
          dispatch('fetchAcctPositions');
          dispatch('fetchEntries');
          dispatch('fetchOpDates');
        })
        .catch((e) => {
          console.log(e);
        })
    },
  },
  modules: {},
});
