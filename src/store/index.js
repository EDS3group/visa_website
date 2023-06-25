import { createStore } from 'vuex'

import auth from './auth/index'

export default createStore({
  state: {
    numberOfTravelers: 3,
    isLoading: false,
    visa_first_step: null,
    visa_second_step: null,
  },
  getters: {
    isLoading(state) {
      return state.isLoading
    },
    numberOfTravelers(state) {
      return state.numberOfTravelers
    },
    visa_first_step(state) {
      return state.visa_first_step
    },
    visa_second_step(state) {
      return state.visa_second_step
    },
  },
  mutations: {
    setLoading(state) {
      state.isLoading = !state.isLoading
    },
    setFirstStep(state, payload) {
      console.log(payload)
      state.visa_first_step = payload
    },
    visa_second_step(state, payload) {
      state.visa_second_step = payload
    },
  },
  actions: {},
  modules: { auth },
})
