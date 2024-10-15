import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/UserList.vue'
import AddUser from '@/views/AddUser.vue'
import EditUser from '@/views/EditUser.vue'
import { getUserById } from '@/services/reqres.api'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/addUser',
      name: 'addUser',
      component: AddUser,
    },
    {
      path: '/editUser/:id',
      name: 'editUser',
      component: EditUser,
      props: true
    }
  ],
})

export default router
