import Vue from 'vue'
import Router from 'vue-router'
import A from '@/components/A'
import B from '@/components/B'
const assert = require('assert')

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/a',
      name: 'A',
      component: A
    },
    {
      path: '/b',
      name: 'B',
      component: B
    },
    { path: '*', redirect: '/a' }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.path === '/b') {
    // 利用 assert 抛出一个错误
    assert(false, '抛出一个错误，该错误会打断跳转，但不会被 vue router 捕捉到')
  }
  next()
})
export default router
