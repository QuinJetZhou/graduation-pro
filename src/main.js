import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import jQuery from '../node_modules/jquery/dist/jquery'
// import layui from '../node_modules/layui-src/build/layui'
// import element from '../node_modules/layui-src/build/lay/modules/element'

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
