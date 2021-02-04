import { createRouter, createWebHashHistory } from 'vue-router'
import Tasks from '@/views/Tasks'
import New from '@/views/New'
import Task from '@/views/Task'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', component: Tasks },
    { path: '/new', component: New },
    { path: '/task', component: Task }
  ],

  linkActiveClass: 'active',
  linkExactActiveClass: 'active'
})

export default router
