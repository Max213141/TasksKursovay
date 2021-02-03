import { createRouter, createWebHashHistory } from 'vue-router'
import Tasks from '@/views/Tasks'
import New from '@/views/New'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', component: Tasks },
    { path: '/new', component: New }
  ],

  linkActiveClass: 'active',
  linkExactActiveClass: 'active'
})

export default router
