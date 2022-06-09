/* console.log("I")
setTimeout( ()=>{console.log("eat")}, 1000 )
setTimeout( ()=>{console.log("ice cream")},10000 )
console.log("with a")
console.log("spoon")
setTimeout( ()=>{console.log("and")},4000 )
console.log("fork") */

//callback
/* function one(callback_two){
	callback_two()
	console.log("step 1")
}

function two(){
	console.log("step 2")
}

one(two) */

// Callback hell
/* let stocks = {
	fruits: ["strawberry", "grapes", "banana", "apple"],
	liquid: ["water", "ice"],
	holder: ["cone", "cup", "stick"],
	toppings: ["chocolate", "peanuts"]
}

let order = (fruits, call_production) => {
	setTimeout(() => {
		console.log(`${stocks.fruits[fruits]} is selected`)
		call_production()
	}, 2000)
}

let production = () => {
	console.log("production started")
	
	setTimeout(()=>{
		console.log("Fruits has been chopped")
		
		setTimeout(()=>{
			console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} is added`)
			
			setTimeout(()=>{
				console.log("The machine has started")
				
				setTimeout(()=>{
					console.log(`Ice-cream is placed over the ${stocks.holder[0]}`)
					
					setTimeout(()=>{
						console.log(`${stocks.toppings[1]} was added as toppings`)
						
						setTimeout(()=>{
							console.log("Ice-cream served")
						},2000)
					},3000)
				},2000)
			},1000)
		}, 1000)
	}, 2000)
}

order(3, production) */

// Promise
/* let stocks = {
	fruits: ["strawberry", "grapes", "banana", "apple"],
	liquid: ["water", "ice"],
	holder: ["cone", "cup", "stick"],
	toppings: ["chocolate", "peanuts"]
}

let is_shop_open = true

let order = (time, work) => {
	return new Promise((resolve, reject) => {
		if (is_shop_open) {
			setTimeout(() => {
				resolve(work())
			}, time)
		} else {
			reject(console.log("Sorry! the shop is closed"))
		}
	})
}
order(2000, () => console.log(`${stocks.fruits[0]} is selected`))

	.then(() => {
		return order(0, () => console.log("Production started"))
	})
	.then(() => {
		return order(2000, () => console.log("Fruits are chopped"))
	})
	.then(() => {
		return order(1000, () => console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} are added`))
	})
	.then(() => {
		return order(1000, () => console.log("Machine is started"))
	})
	.then(() => {
		return order(2000, () => console.log(`Ice-cream is placed over the ${stocks.holder[0]}`))
	})
	.then(() => {
		return order(3000, () => console.log(`${stocks.toppings[1]} is added as toppings`))
	})
	.then(() => {
		return order(2000, () => console.log("Ice-cream is served"))
	})

	.catch(() => console.log("Customer left"))

	.finally(() => console.log("Day ended. Shop is closed")) */

// Async/Await
/* 
let select_toppings = () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(console.log("What toppings would you like?"))
		}, 3000)
	})
}

async function kitchen() {
	console.log("A")
	console.log("B")
	console.log("C")
	await select_toppings()
	console.log("D")
	console.log("E")

}
kitchen()
console.log("task X")
console.log("task Y")
console.log("task Z") */

let stocks = {
	fruits: ["strawberry", "grapes", "banana", "apple"],
	liquid: ["water", "ice"],
	holder: ["cone", "cup", "stick"],
	toppings: ["chocolate", "peanuts"]
}

let is_shop_open = false
let time = (ms) => {
	return new Promise((resolve, reject) => {
		if (is_shop_open) {
			setTimeout(resolve,ms)
		} else {
			reject(console.log("Shop is closed"))
		}
	})
}

async function kitchen() {
	try {
		await time(2000)
		console.log(`${stocks.fruits[0]} is selected`)

		// await time(0000)
		console.log("start the production")

		await time(2000)
		console.log("Fruits are chopped")

		await time(1000)
		console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} is added`)

		await time(1000)
		console.log("Machine is started")

		await time(2000)
		console.log(`Ice-cream is placed over the ${stocks.holder[0]}`)

		await time(3000)
		console.log(`${stocks.toppings[0]} is added as toppings`)

		await time(2000)
		console.log("Ice-cream is served")


	} catch (error){
		console.log("Customer left", error)
	} finally {
		console.log("Day ended. Shop closed")
	}
}

kitchen()