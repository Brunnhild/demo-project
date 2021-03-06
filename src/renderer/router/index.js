import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: require('@/components/HomePage').default
    },
    {
      path: '/oneUser',
      name: 'oneUser',
      component: require('@/components/OneUserPage').default
    },
    {
      path: '/users',
      name: 'users',
      component: require('@/components/UserListPage').default
    },
    {
      path: '/demo',
      name: 'demo',
      component: require('@/components/ChartPage').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
