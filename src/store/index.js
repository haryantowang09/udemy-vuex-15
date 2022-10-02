import { createStore } from 'vuex';
import productsModule from './products/index.js';

const store = createStore({
  modules: {
    products: productsModule
  },
  state: () => ({}),
  mutations: {},
  actions: {},
  getters: {}
});

export default store;