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
export default router
