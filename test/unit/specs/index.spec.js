import Vue from 'vue'
import index from '@/views/index'

describe('index.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(index)
    const vm = new Constructor().$mount()
    Vue.nextTick(() => {
      expect(vm.$el.querySelector('h1').textContent)
        .equal('Welcome to Your Vue.js App1')
    })
  })
})
