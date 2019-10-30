/*
通过mutations间接操作state的对象
 */
import {REQUEST_ADDRESS, REQUEST_CATEGORY, REQUEST_SHOPS} from './mutation-types.js'
import {reqAddress, reqFoodCategorys, reqShops} from '../api'
export default {
  async getAddress ({commit}, state) {
    const geohash = state.longitude + ',' + state.latitude
    const result = await reqAddress(geohash)
    if (result.code === 0) {
      const address = result.data
      commit(REQUEST_ADDRESS, {address})
    }
  },
  async getCategorys ({commit}) {
    const result = await reqFoodCategorys()
    if (result.code === 0) {
      const categorys = result.data
      commit(REQUEST_CATEGORY, {categorys})
    }
  },
  async getShops ({commit}, state) {
    const {longitude, latitude} = state
    const result = await reqShops(longitude, latitude)
    if (result.code === 0) {
      const shops = result.data
      commit(REQUEST_SHOPS, {shops})
    }
  }
}
