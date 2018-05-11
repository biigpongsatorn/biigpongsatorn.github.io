import Vue from 'vue'
import Router from 'vue-router'
import AboutMe from '@/pages/AboutMe'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'AboutMe',
      component: AboutMe
    }
  ]
})
