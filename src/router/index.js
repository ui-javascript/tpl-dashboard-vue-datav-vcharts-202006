import Vue from 'vue'
import Router from 'vue-router'

import BasicLayout from '@/layout/BasicLayout'

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
    redirect: '/map',
    component: BasicLayout,
    children: [
      {
        path: '/dashboard',
        component: () => import('@/pages/dashboard/index'),
        name: 'Dashboard',
        meta: {
          title: '面板',
          icon: 'dashboard',
          affix: true
        }
      },
      {
        path: '/map',
        component: () => import('@/pages/map/index'),
        name: 'Map',
        meta: {
          title: '地图',
          icon: 'map',
          affix: true
        }
      }
    ]
  }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({
    y: 0
  }),
  routes: constantRoutes
})

export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

const router = createRouter()

Vue.use(Router)

export default router
