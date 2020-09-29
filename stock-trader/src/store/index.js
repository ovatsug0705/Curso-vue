import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    balance: 1000,
    stocks: [
      {
        id: 4,
        name: "BMW",
        value: 200,
        quant: 0,
      },
      {
        id: 2,
        name: "Google",
        value: 175,
        quant: 0,
      },
      {
        id: 3,
        name: "Apple",
        value: 150,
        quant: 0,
      },
      {
        id: 4,
        name: "twitter",
        value: 50,
        quant: 0,
      },
    ],
  },
  getters: {
    getBalance: (state) => state.balance,
    getStocks: (state) => state.stocks,
  },
  mutations: {
    setBalance: (state, payload) => (state.balance = payload),
    setStocks: (state, payload) => (state.stocks = payload),
  },
  actions: {
    // buy({ commit }, payload) {},
    // seal({ commit }, payload) {},
  },
  modules: {},
});
