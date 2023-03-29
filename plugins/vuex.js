import { createStore } from 'vuex';

const store = createStore({
  state: {
    data: [{ id: 0, name: 'no' }],
  },
  getters: {},
  mutatuins: {
    getData(state, obj) {
      state.data = obj;
    },
  },
  actions: {
    async getData({ commit }) {
      const { data: resData } = await useFetch('./api');
      commit('getData', resData._rawValue.work);
    },
  },
});

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(store);
});