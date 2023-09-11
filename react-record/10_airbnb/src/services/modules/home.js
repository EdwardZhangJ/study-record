import edRequest from "..";

export function getHomeGoodPriceData() {
  return edRequest.get({
    url: '/home/goodprice'
  })
}
