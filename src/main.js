// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui' //  导入element-ui
import 'element-ui/lib/theme-default/index.css'
import Jwt from 'jsonwebtoken'
import Axios from 'axios'
import Common from './common'
import Store from './store'
import Login from '@/components/Login'
import Todolist from '@/components/Todolist'

Vue.prototype.$http = Axios // 类似于vue-resource的调用方法，之后可以在实例里直接用this.$http.get()等

Vue.config.productionTip = false
Vue.use(ElementUI) // Vue 全局使用
Vue.use(Jwt) // Vue 全局使用
Vue.use(Common)
Vue.use(Store)
Vue.use(VueRouter)

Axios.defaults.withCredentials = true;
// Axios.http.options.emulateJSON = true;
// Axios.http.interceptors.push((request, next) => {
//   request.credentials = true;
//   next();
// });

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [{
      path: '/', // 默认首页打开登录叶
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

router.beforeEach((to, from, next) => {
  const token = sessionStorage.getItem('demo-token');
  if (to.path == '/') { // 如果是跳转到登录页的
    if (token != 'null' && token != null) {
      next('/todolist') // 如果有token就转向todolist不返回登录页
    }
    next(); // 否则跳转回登录页
  } else {
    if (token != 'null' && token != null) {
      Vue.prototype.$http.defaults.headers.common['Authorization'] = 'Bearer ' + token; // 注意Bearer后有个空格
      next() // 如果有token就正常转向
    } else {
      next('/') // 否则跳转回登录页
    }
  }
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {
    App
  }
})
