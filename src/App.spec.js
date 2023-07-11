
import { shallowMount } from '@vue/test-utils'
import App from './App'

describe('App', () => {
  test('é uma instância do Vue', () => {
    const wrapper = shallowMount(App)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
