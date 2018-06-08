import Vue from 'vue'
import Router from 'vue-router'
import index from '@/views/index'
import notFound from '@/views/common/404'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '*',
      name: '404',
      component: notFound
    }
  ]
})
