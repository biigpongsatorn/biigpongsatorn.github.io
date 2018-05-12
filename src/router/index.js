import Vue from 'vue'
import Router from 'vue-router'
import AboutMe from '@/pages/AboutMe'
import VueSlideBar from '../pages/vue-slide-bar.vue'
import VueSvgFiller from '../pages/vue-svg-filler.vue'
import VueThailandAddressAutocomplete from '../pages/vue-thailand-address-autocomplete.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'AboutMe',
      component: AboutMe
    },
    {
      path: '/vue-slide-bar',
      name: 'VueSlideBar',
      component: VueSlideBar
    },
    {
      path: '/vue-svg-filler',
      name: 'VueSvgFiller',
      component: VueSvgFiller
    },
    {
      path: '/vue-thailand-address-autocompleter',
      name: 'VueThailandAddressAutocomplete',
      component: VueThailandAddressAutocomplete
    }
  ]
})
