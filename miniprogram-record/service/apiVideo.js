import edRequest from './index'
/**
 * 请求 MV 视频 列表
 * @param {number} offset 
 * @param {number} limit 
 */
export function getTopMv(offset, limit = 10) {
	return edRequest.get('/top/mv', {
		offset,
		limit
	})
}
/**
 * 请求 MV　播放地址
 * @param {number} id 
 */
export function getMVURL(id) {
	return edRequest.get('/mv/url', {
		id
	})
}
/**
 * 请求 MV 详细数据
 * @param {number} mvid 
 */
export function getMVDetail(mvid) {
	return edRequest.get('/mv/detail', {
		mvid
	})
}
/**
 * 请求 当前MV 相关联 MV
 * @param {number} id 
 */
export function getReladteMV(id) {
	return edRequest.get('/related/allvideo', {
		id
	})
}
