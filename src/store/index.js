import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);


import { ACCT, ACCT_POS, OP_ENTRY, OP_DATE } from './mocks/mock';

export default new Vuex.Store({
  state: {
    accounts: [],
    acct_positions: [],
    entries: [],
    op_dates: [],
  },
  getters: {
    accounts: state => state.accounts,
    acctPositions: state => state.acct_positions,
    entries: state => state.entries,
    opDates: state => state.op_dates,
  },
  mutations: {
    SET_ACCOUNTS: (state, payload) => {
      state.accounts = payload.map(({ AcctNum }) => AcctNum);
    },
    SET_ACCT_POSITIONS: (state, payload) => {
      state.acct_positions = payload;
    },
    SET_ENTRIES: (state, payload) => {
      state.entries = payload;
    },
    SET_OP_DATES: (state, payload) => {
      state.op_dates = payload;
    },

    UPDATE_ACCOUNT: (state, payload) => {},
    UPDATE_ACCT_POSITION: (state, payload) => {},
    UPDATE_ENTRY: (state, payload) => {},
    UPDATE_OP_DATE: (state, payload) => {},

    DELETE_ACCOUNT: (state, payload) => {},
    DELETE_ACCT_POSITION: (state, payload) => {},
    DELETE_ENTRY: (state, payload) => {},
    DELETE_OP_DATE: (state, payload) => {},

  },
  actions: {
    fetchAccounts ({ commit }) {
      axios.get('https://jsonplaceholder.typicode.com/')
        .then(() => {
          const { Acct } = ACCT;
          commit('SET_ACCOUNTS', Acct);
      })
      .catch((e) => {
        console.log(e);
      })
    },
    fetchAcctPositions ({ commit }) {
      axios.get('https://jsonplaceholder.typicode.com/')
        .then(() => {
          const { AcctPos } = ACCT_POS;
          commit('SET_ACCT_POSITIONS', AcctPos);
      })
      .catch((e) => {
        console.log(e);
      })
    },
    fetchEntries ({ commit }) {
      axios.get('https://jsonplaceholder.typicode.com/')
        .then(() => {
          const { OpEntry } = OP_ENTRY;
          commit('SET_ENTRIES', OpEntry);
      })
      .catch((e) => {
        console.log(e);
      })
    },
    fetchOpDates ({ commit }) {
      axios.get('https://jsonplaceholder.typicode.com/')
        .then(() => {
          const { OpDate } = OP_DATE;
          commit('SET_OP_DATES', OpDate);
      })
      .catch((e) => {
        console.log(e);
      })
    },
  },
  modules: {},
});
