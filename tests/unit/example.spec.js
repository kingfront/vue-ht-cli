import { shallowMount } from '@vue/test-utils'
import index from '@/views/index.vue'

describe('index.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(index)
    expect(wrapper.text()).toMatch(msg)
  })
})
