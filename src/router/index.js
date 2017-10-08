// import Vue from 'vue'
// import Router from 'vue-router'
// import Hello from '@/components/Hello'
// import Login from '@/components/Login'
// import Todolist from '@/components/Todolist'

// Vue.use(Router)

// const vueRouter = new Router({
//   mode: 'history',
//   base: __dirname,
//   routes: [{
//       path: '/', // 默认首页打开登录叶
//       name: 'Login',
//       component: Login
//     },
//     {
//       path: '/todolist',
//       component: Todolist
//     },
//     {
//       path: '*',
//       redirect: '/'
//     }
//   ]
// })

// // const router =  new VueRouter({
// //   mode: 'history',
// //   base: __dirname,
// //   routes: [
// //     {
// //       path: '/',
// //       component: Login
// //     },
// //     {
// //       path: '/todolist',
// //       component: TodoList
// //     },
// //     {
// //       path: '*',
// //       redirect: '/'
// //     }
// //   ]
// // })

// vueRouter.beforeEach((to, from, next) => {
//   console.log('测试')
//   next('/order')
// })

// // router.beforeEach((to, from, next) => {
// //   const token = sessionStorage.getItem('demo-token');
// //   if (to.path == '/') { // 如果是跳转到登录页的
// //     if (token != 'null' && token != null) {
// //       next('/todolist') // 如果有token就转向todolist不返回登录页
// //     }
// //     next(); // 否则跳转回登录页
// //   } else {
// //     if (token != 'null' && token != null) {
// //       Vue.prototype.$http.defaults.headers.common['Authorization'] = 'Bearer ' + token; // 注意Bearer后有个空格
// //       next() // 如果有token就正常转向
// //     } else {
// //       next('/') // 否则跳转回登录页
// //     }
// //   }
// // })
