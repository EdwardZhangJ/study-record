// pages/home-video/index.js
import {
	getTopMv
} from '../../service/apiVideo'
Page({
	/**
	 * 页面的初始数据
	 */
	data: {
		topMvs: [],
		hasMore: true,
	},
	/**
	 * 生命周期函数--监听页面加载
	 * aysnc await
	 */
	async onLoad(options) {
		this.getTopMVData(0);
		// const res = await getTopMv(0);
		// this.setData({ topMvs: res.data });
	},
	// 封装网络请求的方法
	async getTopMVData(offset) {
		// 判断是否可以请求
		if (!this.data.hasMore && offset !== 0) return
		// 展示加载动画
		wx.showNavigationBarLoading()
		if (offset === 0) {}
		// 请求数据
		const res = await getTopMv(offset)
		let newData = this.data.topMvs;
		if (offset === 0) {
			newData = res.data
		} else {
			newData = newData.concat(res.data)
		}
		this.setData({
			topMvs: newData
		})
		this.setData({
			hasMore: res.hasMore
		})
		// 结束加载动画
		wx.hideNavigationBarLoading()
		if (offset === 0) {
			wx.stopPullDownRefresh()
		}
	},
	// 封装事件处理的方法
	handleVideoItemClick(event) {
		// 获取 id
		const id = event.currentTarget.dataset.item.id
		// 页面跳转
		wx.navigateTo({
			url: '/pages/detial-video/index?id=' + id,
		})
	},
	/**
	 * 下拉刷新
	 */
	async onPullDownRefresh() {
		this.getTopMVData(0);
		// const res = await getTopMv(0);
		// this.setData({ topMvs: res.data });
	},
	/**
	 * 滚动到底部
	 */
	async onReachBottom() {
		this.getTopMVData(this.data.topMvs.length);
		// if(!this.data.hasMore) return
		// const res = await getTopMv(this.data.topMvs.length);
		// this.setData({ topMvs: this.data.topMvs.concat(res.data)})
		// this.setData({ hasMore: res.hasMore})
	}
})