// baseUI/navigation-bar/index.js
const globalData = getApp().globalData
Component({
	options: {
		// 使用多个插槽必须设置的属性
		multipleSlots: true
	},
	/**
	 * 组件的属性列表
	 */
	properties: {
		title: {
			type: String,
			value: '默认标题'
		}
	},

	/**
	 * 组件的初始数据
	 */
	data: {
		statusHeight: globalData.statusBarHeight,
		navBarHeight: globalData.navBarHeight,
	},
	/**
	 * 组件的方法列表
	 */
	methods: {
		handleLeftClick() {
			this.triggerEvent('click')
		}
	}
})
