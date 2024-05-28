import { createRouter, createWebHistory } from 'vue-router'
import DefaultLayout from '@/layouts/Default.vue'
import Home from '@/views/Home.vue'
import Vps from '@/views/Vps.vue'
import Websites from '@/views/Websites.vue'
import Stats from '@/views/Stats.vue'
import Users from '@/views/Users.vue'
import Settings from '@/views/Settings.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: DefaultLayout,
      children: [
        {
          name: 'home',
          path: '/',
          component: Home
        },
        {
          name: 'vps',
          path: '/vps',
          component: Vps
        },
        {
          name: 'websites',
          path: '/websites',
          component: Websites
        },
        {
          name: 'stats',
          path: '/stats',
          component: Stats
        },
        {
          name: 'users',
          path: '/users',
          component: Users
        },
        {
          name: 'settings',
          path: '/settings',
          component: Settings
        }  
      ]
    }
  ]
})

export default router
