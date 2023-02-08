// 播放器相关共用变量
import {
	getSongDetail,
	getSongLyric
} from '../service/apiPlayer'
import {
	parseLyric
} from '../utils/parseLyric'
import {
	HYEventStore
} from 'hy-event-store'

// const audioContext = wx.createInnerAudioContext()
const audioContext = wx.getBackgroundAudioManager()
const playerStore = new HYEventStore({
	state: {
		id: 0,
		isFirstPlay: true,
		currentSong: [],
		lyricInfos: {},
		durationTime: 0,

		currentTime: 0,
		currentLyricIndex: -1,
		currentLyricText: "",

		isPlaying: false, // 播放状态
		playModeIndex: 0, // 0: 循环播放 1: 单曲循环 2: 随机播放

		playListSongs: [], // 歌曲播放列表
		playListIndex: 0,
	},
	actions: {
		playMusicWithSongIdAction(ctx, {
			id,
			isRefresh = false
		}) {
			// 播放同一首歌时, 仅修改播放状态即可
			if (ctx.id == id && !isRefresh) {
				this.dispatch("changeMusicPlayStateAction", true)
				return
			}
			ctx.id = id;
			// 0. 修改播放状态
			ctx.isPlaying = true
			ctx.currentSong = {}
			ctx.durationTime = 0
			ctx.lyricInfos = []
			ctx.currentTime = 0
			ctx.currentLyricIndex = 0
			ctx.currentLyricText = ""
			// 1. 根据 id 请求数据
			// 		请求歌曲详情
			getSongDetail(id).then(res => {
				ctx.currentSong = res.songs[0]
				ctx.durationTime = res.songs[0].dt
				audioContext.title = res.songs[0].name
			})
			// 		请求歌词信息
			getSongLyric(id).then(res => {
				const lyricInfos = parseLyric(res.lrc.lyric)
				ctx.lyricInfos = lyricInfos;
			})
			// 2. 播放该 id 歌曲
			audioContext.stop()
			audioContext.src = `https://music.163.com/song/media/outer/url?id=${id}.mp3`
			audioContext.title = id

			// 3. 监听 audioContext 一些事件
			if(ctx.isFirstPlay) {
				this.dispatch("setupAudioContextListenerAction")
				ctx.isFirstPlay = false
			}
			// 4. 监听音乐暂停/播放
			// 播放状态
			audioContext.onPlay( () => {
				ctx.isPlaying = true
			})
			// 暂停状态
			audioContext.onPause( () => {
				ctx.isPlaying = false
			})
			audioContext.onStop( () => {
				ctx.isPlaying = false
			})
		},
		// 监听 播放器
		setupAudioContextListenerAction(ctx) {
			// 1. 监听歌曲可以播放
			audioContext.onCanplay(() => {
				// 当歌曲准备好可以播放时
				audioContext.play()
			})
			// 2. 监听时间改变
			audioContext.onTimeUpdate(() => {
				// 获取歌曲当前播放事件
				// 1. 获取当前时间
				const currentTime = audioContext.currentTime * 1000
				// 2. 根据当前时间修改 currentTime
				ctx.currentTime = currentTime

				// 3. 根据当前时间去查找播放歌词
				if (!ctx.lyricInfos.length) return
				let i = 0
				for (; i < ctx.lyricInfos.length; i++) {
					const lyricInfo = ctx.lyricInfos[i]
					if (currentTime < lyricInfo.time) {
						break;
					}
				}
				// 4. 设置当前歌词的索引和内容
				const currentIndex = i - 1
				if (ctx.currentLyricIndex !== currentIndex) {
					const currentLyricInfo = ctx.lyricInfos[currentIndex]
					ctx.currentLyricText = currentLyricInfo.lyricText
					ctx.currentLyricIndex = currentIndex
				}
			})
			// 3. 监听歌曲播放完成
			audioContext.onEnded( () => {
				this.dispatch("changeNewMusicAction")
			})
		},
		changeMusicPlayStateAction(ctx, isPlaying = true) {
			ctx.isPlaying = isPlaying
			ctx.isPlaying ? audioContext.play() : audioContext.pause()
		},
		changeNewMusicAction(ctx, option='next') {
			// 1. 获取当前索引
			let index = ctx.playListIndex
			let textIndex 
			// 2. 根据不同的播放模式 获取下一首歌的索引
			switch (ctx.playModeIndex) {
				case 0: // 顺序播放
					index = option === 'next' ? index + 1 : index - 1
					if (index === ctx.playListSongs.length) index = 0
					if (index === -1) index = ctx.playListSongs.length - 1 
					break
				case 1: // 单曲循环
					break
				case 2: // 随机播放
					index = Math.floor(Math.random() * ctx.playListSongs.length)
					break
			}
			ctx.playListIndex = index
			// 3. 获取歌曲
			let currentSong = ctx.playListSongs[index]
			if (!currentSong) currentSong = ctx.currentSong
			// 4. 播放新的歌曲
			this.dispatch("playMusicWithSongIdAction", {
				id: currentSong.id,
				isRefresh: true
			})
		}
	}

})

export {
	audioContext,
	playerStore
}