import edRequest from "../request"

export function getHomeGoodPriceData() {
  return edRequest.get({
    url: '/home/goodprice'
  })
}

export function getHomeHighScoreData() {
  return edRequest.get({
    url: '/home/highscore'
  })
}

export function getHomeDiscountData() {
  return edRequest.get({
    url: '/home/discount'
  })
}

export function getHomeHotRecommendData() {
  return edRequest.get({
    url: '/home/hotrecommenddest'
  })
}
