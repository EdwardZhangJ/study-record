import { TOKEN_KEY } from '../constants/token-const'
const token = wx.getStorageSync(TOKEN_KEY)
const BASE_URL = 'http://123.207.32.32:9001'
 const LOGIN_BASE_URL = 'http://123.207.32.32:3000'
 class EDRequest {
	 constructor(baseUrl, authHeader = {}) {
		 this.baseUrl = baseUrl
		 this.authHeader = authHeader
	 }
 	request(url, method, params, isAuth = false, header={}) {
		const finalHeader = isAuth ? {...this.authHeader, ...header} : header
 		return new Promise((resolve, reject) => {
 			wx.request({
 				url: this.baseUrl  + url,
				method: method,
				header: finalHeader,
 				data: params,
 				success: function (res) {
 					resolve(res.data)
 				},
 				fail: reject
 			})
 		})
 	}
 	get(url, params, isAuth=false, header) {
 		return this.request(url, 'GET', params, isAuth, header);
 	}
 	post(url, params, isAuth=true, header) {
 		return this.request(url, 'POST', params, isAuth, header);
 	}
 }
const edRequest = new EDRequest(BASE_URL)
const edLoginRequest = new EDRequest(LOGIN_BASE_URL, {
	token
})

export default edRequest
export {edLoginRequest}
 // 使用样例
//  edRequest.get('/top/mv', {
//  	offset: 0,
//  	limit: 10
//  }).then(res => {

//  }).catch(err => {

//  })