import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

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
  },
  actions: {
  },
  modules: {
  }
})
