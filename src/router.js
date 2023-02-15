import { createRouter, createWebHashHistory } from 'vue-router'

import ContactView from './components/views/ContactView.vue'
import QueueView from './components/views/QueueView.vue'
import HomeView from './components/views/HomeView.vue'
import UserView from './components/views/UserView.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      component: QueueView,
      path: '/queue'
    },
    {
      component: ContactView,
      path: '/contact'
    },
    {
      component: HomeView,
      path: '/'
    },
    {
      component: UserView,
      path: '/userview/:z?'
    }
  ]
})

export default router
