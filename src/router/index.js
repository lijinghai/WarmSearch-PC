import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '@/views/Index'
import Login from '@/views/Login'
import Home from '@/views/Home'
import Lost from '@/views/Lost'
import Find from '@/views/Find'
import Thanks from '@/views/Thanks'
import GoodsDetail from '@/views/GoodsDetail'


Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    redirect:'/home',
    name: 'home',
    component: Index,
    children: [
      {
        path:"home",
        component: Home
      },
      {
        path:"lost",
        component: Lost
      },
      {
        path:"find",
        component: Find
      },
      {
        path:"thanks",
        component: Thanks
      },
      {
        path:'goodsDetail',
        name: 'goodsDetail',
        component: GoodsDetail
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
