// 正则表达式： 字符串匹配利器
// [00:58.65]
const timeRegExp = /\[(\d{2}):(\d{2})\.(\d{2,3})\]/

export function parseLyric(lyricString) {
	const lyricStrings = lyricString. split("\n");
	const lyricInfos = []
	for(const lineLyric of lyricStrings){
		// [00:58.65]他们说 要缝好你的伤 没有人爱小丑
		const timeResult = timeRegExp.exec(lineLyric)
		if(!timeResult) continue
		// 1. 获取时间
		const minute = timeResult[1] * 60 * 1000
		const second = timeResult[2] * 1000
		const millsecond = timeResult[3].length === 2 ? timeResult[3] * 10 : timeResult[3] * 1
		const time = minute + second + millsecond
		// 2. 获取歌词文本
		const lyricText = lineLyric.replace(timeRegExp, "")
 		lyricInfos.push({time, lyricText})
	}
	return lyricInfos
}