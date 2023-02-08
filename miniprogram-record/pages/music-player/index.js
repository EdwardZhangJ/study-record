// pages/music-player/index.js
import { audioContext, playerStore } from '../../store/index'
// import { getSongDetail, getSongLyric } from '../../service/apiPlayer'
// import { parseLyric } from '../../utils/parseLyric'
const playModeNames = ["order", "repeat", "random"]
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		id: 0,
		currentSong: {},
		lyricInfos: [],
		durationTime: 0,
		
		currentTime: 0,
		currentLyricIndex: -1,
		currentLyricText: "",

		isPlaying: false,
		playingName: "pause",
		
		playModeIndex: 0,
		playModeName: "order",

		isMusicLyric: false,
		currentPage: 0,
		sliderValue: 0,
		contentHeight: 0,
		isSliderChanging: false,
		lyricScrollTop: 0,
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad(options) {
		// 1. 获取传入的id
		const id = options.id
		this.setData({ id: id })

		/**************        Test code     ***************/ 
		// playerStore.dispatch("playMusicWithSongIdAction", {id})

		// 2. 根据id获取歌曲信息
		// this.getPageData(id)
		// 从 playerStore 中监听获取的歌曲数据
		this.setupPlayerStoreListener()
		// 3. 动态计算内容高度
		const globalData = getApp().globalData
		const contentHeight = globalData.screenHeight - globalData.statusBarHeight - globalData.navBarHeight
		const deviceRate = globalData.deviceRate
		this.setData({ contentHeight, isMusicLyric: deviceRate >= 2 ? true : false })
		// 4. 使用 audioContext 创建播放器;  ffmpeg 流媒体库
		// audioContext.stop()
		// audioContext.src=`https://music.163.com/song/media/outer/url?id=${id}.mp3`
		// audioContext.autoplay = true // 设置自动播放
		// 5. audioContext 的事件监听
		// this.setupAudioContextListener()
	},
	
	// ====================  事件处理 =====================
	handleSwiperChange(event) {
		const current = event.detail.current
		this.setData({ currentPage: current })
	},
	handleSliderChange(event) {
		// 1. 获取 slider 变化值
		const value = event.detail.value
		// 2. 获取需要播放的 currentTime
		const currentTime =  this.data.durationTime * value / 100
		// 3. 设置 context 播放 currentTime 位置的音乐
		// audioContext.pause()
		audioContext.seek(currentTime / 1000)
		// 4. 记录最新的 sliderValue, 将 slider 滑动状态置为 false
		this.setData({ sliderValue: value, isSliderChanging: false})
	},
	handleSliderChanging(event) {
		const value = event.detail.value
		const currentTime = this.data.durationTime * value / 100
		this.setData({ isSliderChanging: true, currentTime });
	},
	handleBackClick() {
		wx.navigateBack()
	},
	handleModeBtnClick() {
		let playModeIndex = this.data.playModeIndex + 1
		if(playModeIndex === 3) playModeIndex = 0
		playerStore.setState("playModeIndex", playModeIndex)
	},
	handlePlayBtnClick() {
		playerStore.dispatch("changeMusicPlayStateAction", !this.data.isPlaying)
	},
	// 根据播放模式进行歌曲切换
	handleMusicShiftBtnClick(event) {
		const option = event.currentTarget.dataset.option
		playerStore.dispatch("changeNewMusicAction", option)
	},

	// ====================  数据监听 =====================
	setupPlayerStoreListener() {
		// 1. 监听 "currentSong", "durationTime", "lyricInfos"
		playerStore.onStates(["currentSong", "durationTime", "lyricInfos"], ({
			currentSong, 
			durationTime, 
			lyricInfos
		}) => {
			if(currentSong) this.setData({currentSong})
			if(durationTime) this.setData({durationTime})
			if(lyricInfos) this.setData({lyricInfos})
		})

		// 2. 监听 currentTime/currentLyricIndex/currentLyricText
		playerStore.onStates(["currentTime", "currentLyricIndex", "currentLyricText"], ({
			currentTime, 
			currentLyricIndex, 
			currentLyricText
		}) => {
			if(currentTime && !this.data.isSliderChanging) {
				const sliderValue = currentTime/this.data.durationTime * 100
				this.setData({currentTime, sliderValue})
			}
			if(currentLyricIndex) {
				this.setData({currentLyricIndex, lyricScrollTop: currentLyricIndex * 35})
			}
			if(currentLyricText) this.setData({currentLyricText})
		})

		// 3. 监听播放模式相关数据
		playerStore.onStates(["playModeIndex", "isPlaying"], ({playModeIndex, isPlaying}) => {
			if(playModeIndex !== undefined) {
				this.setData({ playModeIndex, playModeName: playModeNames[playModeIndex] })
			}
			if(isPlaying !== undefined) {
				this.setData({ 
					isPlaying, 
					playingName: isPlaying ? 'pause' : 'resume'
				})
			} 
		})
	},
	
	/**
	 * 生命周期函数--监听页面卸载
	 */
	onUnload() {

	},
})