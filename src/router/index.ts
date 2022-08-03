import { createRouter,createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "group-index" */'@/views/HomeView.vue'),
    children:[
      {
        path: '/index',
        name: 'index',
        component: () => import(/* webpackChunkName: "group-index" */'@/views/MainHome.vue')
      },
      {
        path: '/article',
        name: 'article',
        component: () => import(/* webpackChunkName: "group-article" */'@/views/ArticleView.vue')
      },
      {
        path: '/about',
        name: 'about',
        component: () => import(/* webpackChunkName: "group-about" */'@/views/AboutView.vue')
      },
      {
        path: '/login',
        name: 'login',
        component: () => import(/* webpackChunkName: "group-login" */'@/views/LoginView.vue')
      }
    ]
  },
]

const router = createRouter({
  // history: createWebHistory(process.env.VUE_APP_ROUTER),
  history: createWebHashHistory("/"),
  routes
})

export default router
