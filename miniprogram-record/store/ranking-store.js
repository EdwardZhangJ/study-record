import {
	HYEventStore
} from 'hy-event-store'
import {
	getRanking
} from '../service/apiMusic'

const rankingMap = {
	0: "newRanking",
	1: "hotRanking",
	2: "originRanking",
	3: "upRanking",
}

const rankingStore = new HYEventStore({
	state: {
		newRanking: {}, // 0: 新歌榜;
		hotRanking: {}, // 1. 热门榜
		originRanking: {}, // 2: 原创榜;
		upRanking: {}, // 3: 飙升榜;
	},
	actions: {
		getRankingDataAction(ctx) {
			// 0: 新歌榜; 1: 热门榜; 2: 原创榜; 3: 飙升榜
			for (let i = 0; i < 4; i++) {
				getRanking(i).then(res => {
					// 将 switch 优化成 map 对象
					const rankingName = rankingMap[i]
					ctx[rankingName] = res.playlist
					// switch(i) {
					// 	case 0:
					// 		ctx.newRanking = res.playlist
					// 		break;
					// 	case 1:
					// 		ctx.hotRanking = res.playlist
					// 		break;
					// 	case 2:
					// 		ctx.originRanking = res.playlist
					// 		break;
					// 	case 3:
					// 		ctx.upRanking = res.playlist
					// 		break;
					// 	default:
					// 		break;
					// }
				})
			}
		}
	}
})


export {
	rankingStore, rankingMap
}