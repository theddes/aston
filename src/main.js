import Vue from 'vue'

// plugins
import StoryblokVue from 'storyblok-vue'
import Img from './plugins/img'

import App from './App.vue'
import router from './router'
import store from './store'

import './registerServiceWorker'

Vue.use(StoryblokVue)
Vue.use(Img)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
