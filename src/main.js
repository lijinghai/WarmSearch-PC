import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'

Vue.config.productionTip = false


// 挂载axios到vue的原型，由于继承性，所有的组件都可以使用this.$http
import axios from 'axios';
Vue.prototype.$http = axios;

// 设置公共的url
axios.defaults.baseURL = 'http://localhost:8091';

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
