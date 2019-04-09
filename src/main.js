import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
// import store from 'storejs';
import Bus from "./bus";

Vue.use(Bus); 

Vue.config.productionTip = false;

Vue.prototype.$http = axios;// 定义 axios 组件
// Vue.prototype.$storeLocal = storeLocal;// 定义 localStorage 组件
Vue.prototype.unsplashId = "d46fae74f794e091ca220153b982053aeb53218e7bbf0f3e9ba9d19d9a5a6143";

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
