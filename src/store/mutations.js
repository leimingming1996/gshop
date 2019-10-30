/*
直接操作state的对象
 */
import {REQUEST_ADDRESS, REQUEST_CATEGORY, REQUEST_SHOPS} from './mutation-types.js'

export default {
  [REQUEST_ADDRESS] (state, {address}) {
    state.address = address
  },
  [REQUEST_CATEGORY] (state, {categorys}) {
    state.categorys = categorys
  },
  [REQUEST_SHOPS] (state, {shops}) {
    state.shops = shops
  }
}
