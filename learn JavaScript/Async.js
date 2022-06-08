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