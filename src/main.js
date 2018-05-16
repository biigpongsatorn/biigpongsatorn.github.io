// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Buefy from 'buefy'
import Highlight from 'vue-highlight-component'

import 'highlight.js/styles/vs2015.css'
import 'begeta/css/begeta.min.css'

Vue.use(Buefy)
Vue.component('Highlight', Highlight)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
