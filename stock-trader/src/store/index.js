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
    setStock: (state, payload) => {
      state.stocks.forEach((stock) => {
        if (stock.id == payload.id) {
          stock = payload.data;
        }
      });
    },
  },
  actions: {
    buy({ commit }, payload) {
      let afterBuy = this.state.balance - payload;
      commit("setBalance", afterBuy);
    },
    seal({ commit }, payload) {
      let afterSeal = this.state.balance + payload;
      commit("setBalance", afterSeal);
    },
    updateStock({ commit }, payload) {
      const stockData = {
        id: payload.id,
        data: payload,
      };
      commit("setStock", stockData);
    },
    updateBalance({ commit }, payload) {
      commit("setBalance", payload);
    },
    updateStocks({ commit }, payload) {
      commit("setStocks", payload);
    },
  },
  modules: {},
});
