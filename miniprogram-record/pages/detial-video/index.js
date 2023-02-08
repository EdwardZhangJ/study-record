// pages/detial-video/index.js
import {
	getMVDetail,
	getMVURL,
	getReladteMV
} from '../../service/apiVideo'
Page({
	/**
	 * 页面的初始数据
	 */
	data: {
		mvURLInfo: {},
		mvDetail: {},
		mvRelated: []
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad(options) {
		const id = options.id
		this.getPageData(id)
	},

	getPageData(id) {
		// 1. 请求播放地址
		getMVURL(id).then(res => {
			this.setData({
				mvURLInfo: res.data
			})
		})
		// 2. 请求视频信息
		getMVDetail(id).then(res => {
			this.setData({
				mvDetail: res.data
			})
		})
		// 3. 请求相关视频
		getReladteMV(id).then(res => {
			this.setData({
				mvRelated: res.data
			})
		})
	}

})