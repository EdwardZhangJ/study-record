// pages/detail-songs/index.js
import { playerStore, rankingStore } from '../../store/index'
import { getMusicListDetail } from '../../service/apiMusic'

Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		type: "",
		rankingName: "",
		songInfo: {},
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad(options) {
		const type = options.type
		this.setData({ type: type })
		if(type === 'list') {
			const id = options.id
			getMusicListDetail(id).then( res => {
				this.setData({ songInfo: res.playlist })
			})
		}else if(type === 'rank') {
			const rankingName = options.rankingName;
			this.setData({ rankingName: rankingName })
			// 1. 获取数据
			rankingStore.onState(rankingName, this.getRankingDataHandler)
		}
	},
	handleSongItemClick(event) {
		const index = event.currentTarget.dataset.index
		playerStore.setState("playListSongs", this.data.songInfo.tracks)
		playerStore.setState("playListIndex", index)
	},
	/**
	 * 生命周期函数--监听页面卸载
	 */
	onUnload() {
		if(this.data.ranking) {
			rankingStore.offState(this.data.rankingName, this.getRankingDataHandler)
		}
	},
	getRankingDataHandler(res) {
		this.setData({ songInfo: res })
	},
})