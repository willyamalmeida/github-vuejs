import Vuex from "vuex";
import Vue from "vue";
import searchuser from "./modules/searchuser";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    searchuser
  },

  state: {
    user: null,
    repositories: []
  },

  getters: {
    isUser(state) {
      return state.user ? true : false;
    },

    isRepository(state) {
      return state.repositories.length > 0;
    }
  },

  actions: {},

  mutations: {
    setUser(state, user) {
      state.user = user;
    },

    setRepository(state, repositories) {
      state.repositories = repositories;
    }
  }
});
