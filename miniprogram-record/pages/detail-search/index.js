// pages/detail-search/index.js
import { getSearchHot, getSearchSuggest, getSearchResult } from '../../service/apiSearch'
import debounce from '../../utils/debounce'
import stringToNodes from '../../utils/stringToNodes'

const debounceGetSearchSugges = debounce(getSearchSuggest, 300)
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		hotKeyWords: [],
		suggestResult: [],
		suggestSongsNodes: [],
		resultSongs: [],
		searchValue: "",
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad(options) {
		// 1. 获取页面数据
		this.getPageData()
	},
	getPageData() {
		getSearchHot().then( res => {
			this.setData({ hotKeyWords: res.result.hots})
		})
	},
	// 事件处理：输入框输入字符调接口取数据
	handleSearchChange(event) {
		// 1.获取输入的关键字
		const searchValue = event.detail
		// 2.保存关键字
		this.setData({ searchValue: searchValue })
    // 3.判断关键字为空字符的处理逻辑
		if(!searchValue.length) {
			this.setData({ suggestResult: [], resultSongs: [] })
			debounceGetSearchSugges.cancel()
			return
		}
		// 4.根据关键字进行搜索
		debounceGetSearchSugges(searchValue).then( res => {
			// 1. 获取建议的关键字歌曲
			const suggestSongs = res.result.allMatch
			const suggestSongsNodes = []
			this.setData({ suggestResult: res.result.allMatch })
			if(!suggestSongs) return
			// 2. 转换成 nodes 节点
			const suggestKeyWords = suggestSongs.map( item => item.keyword )
			for( const keyword of suggestKeyWords) {
				const nodes = stringToNodes(keyword, searchValue)
				suggestSongsNodes.push(nodes)
			}
			this.setData({suggestSongsNodes: suggestSongsNodes})
		})
	},
	// 事件处理：根据内容获取接口数据
	hangdleSeachAction() {
		const serachValue = this.data.searchValue
		getSearchResult(serachValue).then( res => {
			this.setData({ resultSongs: res.result.songs })
		})
	},
	// 事件处理：根据搜索建议的点击事件处理
	handleKeywordItemClick(event) {
		// 1. 获取点击的关键字
		const keyword = event.currentTarget.dataset.keyword;
		// 2. 设置关键字到 searchValue
		this.setData({ searchValue: keyword })
		// 3. 发送网络请求
		this.hangdleSeachAction()
	},
	/**
	 * 生命周期函数--监听页面卸载
	 */
	onUnload() {

	},

})