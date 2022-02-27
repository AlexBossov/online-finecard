import axios from "axios";

export default {
  mutations: {
    setCompanyId(state, companyId) {
      state.companyId = companyId
    },
    setAuthToken(state, authToken) {
      state.authToken = authToken
    },

    loginStart: state => state.loggingIn = true,

    loginStop: (state, errorMessage) => {
      state.loggingIn = false;
      state.loginError = errorMessage;
      state.loginSuccessful = !errorMessage;
    },

    updateAuthToken: (state, authToken) => {
      state.accessToken = authToken;
    },
    updateCompanyId: (state, companyId) => {
      state.companyId = companyId
    }
  },

  actions: {
    async doLogin({ commit }, loginData) {
      commit('loginStart');
      await axios.post('http://my-finecard.online/api/Authenticate/login', {
        ...loginData
      }, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
          "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token"
        }
      }).then(response => {
          localStorage.setItem('authToken', response.data.token);
          localStorage.setItem('companyId', response.data.companyId)
          commit('loginStop', null);
          commit('updateAuthToken', response.data.token);
          commit('updateCompanyId', response.data.companyId)
        })
        .catch(error => {
          commit('loginStop', error.response.data.error);
          commit('updateAuthToken', null);
          commit('updateCompanyId', null)
        })
    },
    fetchAuthToken({ commit }) {
      commit('updateAuthToken', localStorage.getItem('authToken'));
      commit('updateAuthToken', localStorage.getItem('companyId'));
    }
  },

  state: {
      companyId: Number,
      authToken: String,
      loggingIn: false,
      loginError: null,
      loginSuccessful: false
  },

  getters: {
    getAuthToken(state) {
      return state.authToken
    },
    getCompanyId(state) {
      return state.companyId
    }
  }
}
