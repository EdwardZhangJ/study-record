import {edLoginRequest} from './index'

export function getLoginCode() {
	return new Promise((resolve, reject) => {
		wx.login({
			timeout: 1000,
			success: res => {
				const code = res.code
				resolve(code)
			},
			fail: err => {
				console.log(err);
				reject(err)
			}
		})
	})
}

export function sendCodeToServe(code) {
	return edLoginRequest.post("/login", { code })
}
export function checkToken(token) {
	return edLoginRequest.post("/auth", {}, true)
}

export function checkSession() {
	return new Promise((resolve) => {
		wx.checkSession({
			success: () => {
				resolve(true)
			},
			fail: () => {
				resolve(false)
			}
		})
	})
}

export function getUserInfo() {
	return new Promise((resolve, reject) => {
		wx.getUserProfile({
			desc: '获取个人头像相关信息',
			lang: 'zh_CN',
			success: (res) => {
				console.log(res)
			},
			fail: (err) => {
				reject(err)
			}
		})
	})
}