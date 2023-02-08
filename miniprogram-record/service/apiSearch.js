import edRequest from './index'

export function getSearchHot() {
	return edRequest.get("/search/hot")
}
export function getSearchSuggest(keywords) {
	return edRequest.get("/search/suggest", {
		keywords,
		type: "mobile"
	})
}
export function getSearchResult(keywords) {
  return edRequest.get("/search", {
    keywords
  })
}