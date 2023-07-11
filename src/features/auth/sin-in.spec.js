
import { shallowMount } from '@vue/test-utils'
import SignIn from './sign-in.vue'

import EventBus from '@/plugins/event-bus.js'
import Vuelidate from 'vuelidate'

import Vue from 'vue'

Vue.use(EventBus)
Vue.use(Vuelidate)

describe('SignIn', () => {
  
  let wrapper 
  beforeAll( () => {
    wrapper = shallowMount(SignIn)
  })

  test('Se o estado do validation é inicialmente $invalid == true', () => {
    expect(wrapper.vm.$v.$invalid).toBeTruthy()
  })

  test('Se o estado do validation é $invalid == false quando todos os campos obrigatórios forem preenchidos', () => {
    wrapper.setData({
      username: 'gabriel',
      password: '12345'

    })
    expect(wrapper.vm.$v.$invalid).toBeFalsy()
  })

  test(' As propriedades corretas estão presentes no estado do componente', () => {
    const expected = ['username', 'password', 'keepSignedIn' ]
    const recived = Object.keys(wrapper.vm.$data)
    expect(expected).toEqual(recived)
  })

  test( 'O evento do-sign-in é disparado quando vm.submit() é executado', () => {
    setData(wrapper)
    wrapper.vm.submit()
    const data = wrapper.emitted('do-sign-in') [0] [0]
    expect(data).toEqual({
      username: 'Gabriel',
      password: '12345',
      keepSignedIn: true
    })
  })

  test('é uma instância do Vue', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  const setData = wrapper => wrapper.setData({
    username: 'Gabriel',
    password: '12345'
  })

  const resetData = wrapper => wrapper.setData({
    username: 'Gabriel',
    password: '12345'
  })
})
