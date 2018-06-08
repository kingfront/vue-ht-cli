// The Vue build version to load with the `import` command
import Vue from 'vue'
import App from './App'
import store from '@/store'
import router from './router'
import '@/icons'
import { Log } from './util/util.js'
import { CTS } from './config/config.js'
// 是否加载mock数据
if (CTS.MOCK_FLG) {
  require('@/mock')
}
// 全局挂载日志打印,引用是否启用
Vue.prototype.$Log = Log
Log.isConsole = CTS.CONSOLE_FLG

Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
