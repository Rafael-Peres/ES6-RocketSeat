const arr = [1, 3, 4, 5, 8, 9]
const newArr = arr.map(item => item * 2)

console.log(newArr)

const sum = arr.reduce((total, next) => total + next)

const filter = arr.filter(function(item) {
	return item % 2 === 0
})

console.log(filter)

//() =>

const arr = [1, 3, 4, 5, 6]
const newArr = arr.map(item => item * 2)

console.log(newArr)
