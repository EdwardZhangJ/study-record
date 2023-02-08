var nums = [10, 5, 11, 100, 55]
var newNum = []

// filter: 过滤
// 10 => 10 % 2 == 0 为 true => 放到 newNums
// 5 => 10 % 2 == 0 为 false => 不放到 newNums
// 11 => 10 % 2 == 0 为 false => 不放到 newNums
// 200 => 10 % 2 == 0 为 true => 放到 newNums
// 55 => 10 % 2 == 0 为 false => 不放到 newNums

/*var newNums = nums.filter(function (item, index, arr) {
	return item % 2 == 0
})
console.log(newNums)

// map: 映射
var newNums2 = nums.map( function (item) {
	return item * 2;
})
console.log(newNums2)

// forEach: 迭代
nums.forEach( function (item) {
	console.log(item)
})*/

// find/findIndex
var item = nums.find(function (item, index) {
	return item === 11
})
console.log(item)

var friends = [
	{name: 'why', age:18},
	{name: 'kone', age:40},
	{name: 'james', age:35},
	{name: 'curry', age:30},

]

var findFriend = friends.find(function(item) {
	return item.name == 'james'
})

console.log(findFriend)


var findFriendIndex = friends.findIndex(function(item) {
	return item.name == 'james'
})

console.log(findFriendIndex)


// reduce: 累加
var calcul = nums.reduce(function(prev, item){
	return prev + item
}, 0)

console.log(calcul 	)