import apiGithub from "@/api/api-github";

export default {
  namespaced: true,

  state: {
    username: null
  },

  getters: {},

  actions: {
    search({ state, commit }) {
      if (state.username) {
        let self = this;

        return new Promise((resolve, reject) => {
          apiGithub.getUser(state.username).then(response => {
            self.commit("setUser", response.data);
            resolve();
          });

          apiGithub.getRepos(state.username).then(response => {
            self.commit("setRepository", response.data);
            resolve();
          });

          commit("setUsername", "");
        });
      }
    },

    updateUsername({ commit }, value) {
      commit("setUsername", value);
    }
  },

  mutations: {
    setUsername(state, username) {
      state.username = username;
    }
  }
};
