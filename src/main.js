import Vue from 'vue'
import App from './App.vue'
import router from './router/'
import store from './store/'
import { Skeleton } from 'vant'

Vue.use(Skeleton)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
