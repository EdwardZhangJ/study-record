function formatPrice(price, symbol = '￥', decimal = 2) {
  return symbol + Number(price).toFixed(decimal)
}
