import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Skeleton from '../components/webDebugger/Skeleton.vue'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/Skeleton',
    name: 'Skeleton',
    component: Skeleton
  },

]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
