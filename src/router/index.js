import { createRouter, createWebHashHistory } from 'vue-router'
import Index from '@/views/Index'
import Login from '@/views/Login'
import Home from '@/views/Home'
import Goods from '@/views/Goods'
import Thanks from '@/views/Thanks'

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
        path:"goods",
        component: Goods
      },
      {
        path:"thanks",
        component: Thanks
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
