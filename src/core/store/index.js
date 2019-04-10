import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const index = new Vuex.Store({
  state: {
    configId: '',
  },
  mutations: {
    updateConfigId(store, payload) {
      store.configId = payload.configId;
    }
  }
});

export default index;
