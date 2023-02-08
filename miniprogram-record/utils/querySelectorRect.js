export default function(selector) {
	return new Promise((resolve) => {
		const query = wx.createSelectorQuery()
		query.select(selector).boundingClientRect()
		// query.exec(resolve)
		query.exec( (res) => { // 当前绑定对象的回调函数
			resolve(res)
		})
	})
}