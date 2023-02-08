// pages/home-music/index.js
import querySelectorRect from '../../utils/querySelectorRect'
import { getBanners, getHotMusicList } from '../../service/apiMusic'
import throttle from '../../utils/throttle'
import {	rankingStore, rankingMap, playerStore } from '../../store/index'
const throttleQuerySelectorRect = throttle(querySelectorRect, 1000, { trailing: true})

Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		swiperHeight: 60,
		banners: [],
		recommendSongs: [],
		hotMusicList: [],
		recommandMusicList: [],
		rankingList: {0: {}, 2: {}, 3: {}}, 

		currentSong: {},
		isPlaying: false,
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad(options) {
		// 获取页面数据
		this.getPageData()
		// 获取共享数据
		rankingStore.dispatch("getRankingDataAction")
		// 从 store 中获取共享的数据
		this.setupPlayerStoreListener()
	},
	// 获取网络请求
	getPageData() {
		getBanners().then(res => {
			this.setData({
				banners: res.banners
			})
			// setData 是同步还是异步的
			// setData 在设置 data 数据上，是同步的
			// 通过最新的数据对 wxml 进行渲染，渲染的过程是异步的
			//  React -> setState() 是异步的；
			// 为何设置是异步的？ 在渲染时以及在传值的组件之间的数据不同步问题，
		})
		// 热门歌单
		getHotMusicList().then (res=> {
			this.setData({ hotMusicList: res.playlists})
		})
		// 推荐歌单
		getHotMusicList("流行").then (res=> {
			this.setData({ recommandMusicList: res.playlists})
		})
	},
	// 测试 打开高德地图
	openAMap() {
		wx.navigateTo({
			url: '/pages/test-map/index',
		})
	},
	handleSearchClick() {
		wx.navigateTo({
			url: '/pages/detail-search/index',
		})
	},
	handleSwiperImageLoad() {
		// 获取图片的高度(如何获取组件里图片的高度)
		// 多个轮播图片会调用多次，需要进行 防抖和节流
		throttleQuerySelectorRect('.swiper-image').then(res => {
			const rect = res[0]
			this.setData({
				swiperHeight: rect.height
			})
		})
	},
	handleSongItemClick(event) {
		const index = event.currentTarget.dataset.index
		playerStore.setState("playListSongs", this.data.recommendSongs)
		playerStore.setState("playListIndex", index)
	},
	handlePlayBtnClick(event) {
		playerStore.dispatch("changeMusicPlayStateAction", !this.data.isPlaying)
	},
	handlePlayBarClick(){
		wx.navigateTo({
			url: '/pages/music-player/index?id=' + this.data.currentSong.id,
		})
	},
	handlePlayListBtnClick() {
		
	},
	onUnload() {

	},

	setupPlayerStoreListener() {
		// 榜单监听
		rankingStore.onState("hotRanking", (res) => {
			if (!res.tracks) return
			const recommendSongs = res.tracks.slice(0, 6)
			this.setData({ recommendSongs: recommendSongs})
		})
		rankingStore.onState("newRanking", this.getRankingHandler(0))
		rankingStore.onState("originRanking", this.getRankingHandler(2))
		rankingStore.onState("upRanking", this.getRankingHandler(3))
		// 2. 播放器监听
		playerStore.onStates(["currentSong", "isPlaying"], ({currentSong , isPlaying}) => {
			if(currentSong) this.setData({currentSong})
			if(isPlaying !== undefined) this.setData({isPlaying})
		})
	} ,

	getRankingHandler(idx) {
		return (res) => {
			if(Object.keys(res).length === 0) return
			const name = res.name
			const coverImgUrl = res.coverImgUrl
			const playCount = res.playCount
			const songList = res.tracks.slice(0, 3)
			const rankingObj = {name, coverImgUrl, playCount, songList}
			const newRakings = {...this.data.rankingList, [idx]: rankingObj}
			this.setData({ rankingList: newRakings})
		}
	},
	// getNewRankingHandler() {
	// 	    if (Object.keys(res).length === 0) return
  //   const name = res.name
  //   const coverImgUrl = res.coverImgUrl
  //   const songList = res.tracks.slice(0, 3)
  //   const rankingObj = {name, coverImgUrl, songList}
  //   const originRankings = [...this.data.rankings]
  //   originRankings.push(rankingObj)
  //   this.setData({ 
  //     rankings: originRankings
  //   })
	// }
	openMoreClick() {
		this.navigateToDetailSongsPage("hotRanking")
	},
	openRankingSong(event) { 
		const rankingName = rankingMap[event.currentTarget.dataset.idx]
		this.navigateToDetailSongsPage(rankingName)
	},
	navigateToDetailSongsPage(rankingName) {
		wx.navigateTo({
			url: `/pages/detail-songs/index?rankingName=${rankingName}&type=rank`,
		})
	},
})