import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export const constantRoutes = [
//   {
//     path: '/login',
//     component: () => import('@/views/login/index'),
//     hidden: true
//   },
//   {
//     path: '/404',
//     component: () => import('@/views/error-page/404'),
//     hidden: true
//   },
  {
    path: '/',
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      component: () => import('@/pages/index'),
      name: 'Dashboard',
      meta: {
        title: 'Dashboard',
        icon: 'dashboard',
        affix: true
      }
    }]
  }
]
