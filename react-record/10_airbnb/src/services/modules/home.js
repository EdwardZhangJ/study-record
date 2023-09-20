import edRequest from "../request"

export function getHomeGoodPriceData() {
  return edRequest.get({
    url: '/home/goodprice'
  })
}
