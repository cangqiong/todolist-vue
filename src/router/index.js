import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Login from '@/components/Login'
import Todolist from '@/components/Todolist'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/',  // 默认首页打开登录叶
      name: 'Login',
      component: Login
    },
    {
      path: '/todolist', 
      component: Todolist
    },
    {
      path: '*', 
      redirect: '/'
    }
  ]
})
