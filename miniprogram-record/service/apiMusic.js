import edRequest from './index'

export function getBanners() {
	return edRequest.get("/banner", {
		type: 2
	})
}

export function getRanking(idx) {
	return edRequest.get("/top/list", {
		idx
	})
}

export function getHotMusicList(cat="全部", limit=6, offset=0) {
	return edRequest.get("/top/playlist", {
		cat,
		limit,
		offset
	})
}

export function getMusicListDetail(id) {
	return edRequest.get("/playlist/detail/dynamic", {
		id
	})
}