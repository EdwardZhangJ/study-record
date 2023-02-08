// pages/home-profile/index.js
import { getUserInfo } from '../../service/apiLogin'
Page({

	/**
	 * 页面的初始数据
	 */
	data: {

	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad(options) {

	},

	async handleGetUserInfo() {
		// 3. 获取用户信息
		const userInfo = await getUserInfo()
		console.log(userInfo);
	},
})