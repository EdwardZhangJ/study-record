// app.js
import {
	getLoginCode,
	sendCodeToServe,
	checkToken,
	checkSession
} from './service/apiLogin'
import {
	TOKEN_KEY
} from './constants/token-const'
App({
	async onLaunch() {
		// 1. 获取设备信息
		const info = wx.getSystemInfoSync()
		this.globalData.statusBarHeight = info.statusBarHeight
		this.globalData.screenHeight = info.screenHeight
		this.globalData.screenWidth = info.screenWidth
		this.globalData.deviceRate = info.screenHeight / info.screenWidth
		// 2. 让用户默认进行登陆
		this.handleLogin()
	
	},

	async handleLogin() {
		const token = wx.getStorageSync(TOKEN_KEY)
		// token 是否过期
		const checkedToken = await checkToken()
		// 判断 session 是否过期
		const checkedSession = await checkSession()
		if (!token || checkedToken.errorCode || !checkedSession) {
			this.loginAction()
		}
	},
	async loginAction() {
		//  1. 获取 code
		const code = await getLoginCode()
		// 2. 将 code 发送给服务器
		const result = await sendCodeToServe(code)
		const token = result.token
		wx.setStorageSync(TOKEN_KEY, token)
	},
	globalData: {
		navBarHeight: 44, // 导航栏 默认高度
		statusBarHeight: 0,
		screenHeight: 0,
		deviceRate: 0,
		screenWidth: 0,
	}

})