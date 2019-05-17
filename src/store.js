import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    hasLogin:false,
    newAccount:'',
    newPassword:''
  },
  mutations: {
    changeLogin(state){
      state.hasLogin = true;
    }
  },
  actions: {

  }
})
