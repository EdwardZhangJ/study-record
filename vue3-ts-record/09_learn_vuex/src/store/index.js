import { createStore } from 'vuex'
import home from './modules/home'
import user from './modules/user'

import axios from 'axios'
import { INCREMENT_N } from './mutation-types'
const store = createStore({
  state() {
    return {
      rootCounter: 0,
      counter: 100,
      name: 'CoderWhy',
      age: 19,
      height: 1.88,
      books: [
        { name: '深入Vuejs', price: 200, count: 3 },
        { name: '深入webpack', price: 230, count: 2 },
        { name: '深入React', price: 130, count: 1 },
        { name: '深入Node', price: 210, count: 5 },
      ],
      discount: 0.7,
      banners: []
    }
  },
  mutations: {
    increment(state) {
      state.counter++
    },
    // incrementN(state, payload) {
    //   state.counter += payload
    // },
    [INCREMENT_N](state, payload) {
      console.log(payload);
      state.counter += payload.n
    },
    decrement(state) {
      state.counter--
    },
    addBannerData(state, payload) {
      state.banners = payload
    }
  },
  getters: {
    totalPrice(state, getters) {
      let totalPrice = 0
      for (const book of state.books) {
        totalPrice += book.count * book.price
      }
      return totalPrice * getters.currentDiscount
    },
    currentDiscount(state) {
      return state.discount * 0.9
    },
    totalPriceCountGreaterN(state, getters) {
      return function (n) {
        let totalPrice = 0
        for (const book of state.books) {
          if (book.count > n) {
            totalPrice += book.count * book.price
          }
        }
        return totalPrice * getters.currentDiscount
      }
    },
    nameInfo(state) {
      return `name: ${state.name}`
    },
    ageInfo(state) {
      return `age: ${state.age}`
    },
    heightInfo(state) {
      return `height: ${state.height}`
    },
  },
  actions: {
    // 放函数
    incrementAction(context) {
      setTimeout(() => {
        context.commit('increment')
      }, 1000);
    },
    decrementAction(context) {
      setTimeout(() => {
        context.commit('decrement')
      }, 1000);
    },
    getHomeMultiData(context) {
      return new Promise((resolve, reject) => {
        axios.get('http://123.207.32.32:8000/home/multidata').then(res => {
          context.commit('addBannerData', res.data.data.banner.list)
          resolve()
        }).catch(err => {
          reject(err)
        })
      })
    }
  },
  modules: {
    home,
    user
  }
})

export default store
