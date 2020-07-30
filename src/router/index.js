import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect:'/login'
  },
  {
    path:'/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '@/views/login/index.vue')
  },
  {
    path:'/main',
    name: 'main',
    component: () => import(/* webpackChunkName: "main" */ '@/views/main/index.vue'),
    children: [{
      path:'/user',
      name: 'user',
      component: () => import(/* webpackChunkName: "user" */ '@/views/main/user/index.vue')
    },{
      path:'/role',
      name: 'role',
      component: () => import(/* webpackChunkName: "role" */ '@/views/main/role/index.vue')
    },{
      path:'/project',
      name: 'project',
      component: () => import(/* webpackChunkName: "project" */ '@/views/main/project/index.vue')
    },{
      path:'/project-edit',
      name: 'projectEdit',
      component: () => import(/* webpackChunkName: "project" */ '@/views/main/project/edit.vue')
    }]
  },
]
const router = new VueRouter({
  routes
})

export default router