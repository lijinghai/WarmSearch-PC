import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import {setStore} from '@/utils/storage'

export default new Vuex.Store({
  state: {
    //表示是否登录
    login:false,
    //表示用户的信息
    userInfo: null,
    //表示是物品的加入篮子里
    carList:[],
    showCart:false
  },
  mutations: {
    SHOWCART(state, { showCart }) {
      state.showCart = showCart;
    },
    ISLOGIN(state, info) {
      state.userInfo = info;
      state.login = true;
      setStore('userInfo', info);
    },
  },
  actions: {
  },
  modules: {
  }
})
