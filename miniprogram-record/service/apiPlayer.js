import edRequest from './index'

export function getSongDetail(ids) {
	return edRequest.get("/song/detail", {
		ids
	})
}

export function getSongLyric(id) {
	return edRequest.get("/lyric", {
		id
	})
}