import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '@/views/Index'
import Login from '@/views/Login'
import Home from '@/views/Home'
import Lost from '@/views/Lost'
import Find from '@/views/Find'
import Thanks from '@/views/Thanks'
import GoodsDetail from '@/views/GoodsDetail'
import GoodsDetailUrgent from '@/views/GoodsDetailUrgent'
import GoodsDetailLost from '@/views/GoodsDetailLost'
import GoodsDetailFind from '@/views/GoodsDetailFind'
import User from '@/views/User'
import Registere from '@/views/Registere'


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
      },
      {
        path:'goodsDetailUrgent',
        name: 'goodsDetailUrgent',
        component: GoodsDetailUrgent
      },
      {
        path:'goodsDetailLost',
        name: 'goodsDetailLost',
        component: GoodsDetailLost
      },
      {
        path:'goodsDetailFind',
        name: 'goodsDetailFind',
        component: GoodsDetailFind
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/registere',
    name: 'registere',
    component: Registere
  },
  {
    path: '/user',
    name: 'user',
    component:User,
    meta:{
      //证明我现在需要守卫
      auth:true
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
