import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import { getStore } from '@/utils/storage'

Vue.config.productionTip = false


// 挂载axios到vue的原型，由于继承性，所有的组件都可以使用this.$http
import axios from 'axios';
Vue.prototype.$http = axios;

// 设置公共的url
axios.defaults.baseURL = 'http://localhost:8091';



axios.interceptors.request.use(config => {
  const token = getStore('token');
  if (token) {
    // 表示用户已登录
    config.headers.common['Authorization'] = token;
  }
  return config
}, error => {
  return Promise.reject(error);
})



//守卫
router.beforeEach((to,from,next)=>{
  console.log(to.matched);
  if (to.matched.some(record => record.meta.auth)) {
    // 用户未登录 需要跳转登录页面
    next({
      path: '/login',
      query: {
        redirect: to.fullPath
      }
    })
  } else {
    next();
  }
  axios.post('/pcuser/validate', {}).then(res => {
    let data = res.data;
    if (data.data.state !== 1) {
      // 用户要登录

    } else {
      // 保存用户的信息
      store.commit('ISLOGIN', data);
      if (to.path === '/login') {
        router.push({
          path: '/'
        })
      }
      next();
    }
  }).catch(error => {
    console.log(error);
  })
  next();
})


//   if(to.matched.some(record => record.meta.auth)){
//     //用户未登录,需要跳转登录页面
//     next({
//       path: '/login',
//       //重定向回去
//       query:{
//         redirect:to.fullPath
//       }
//     });
//   }else{
//     //否则直接放行
//     next();
//   }
// })

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
