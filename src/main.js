import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
// import store from 'storejs';

Vue.config.productionTip = false;

Vue.prototype.$http = axios// 定义 axios 组件
// Vue.prototype.$storeLocal = storeLocal;// 定义 localStorage 组件

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
