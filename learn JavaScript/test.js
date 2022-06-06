/* Truthy and falsy values
Any of the stuffs other than the following values are considered as falsy values in javascript:
1. false
2. 0
3. ""
4. null -> how you as a developer signalises emptiness
5. undefined -> How javascript signalises emptiness
6. NAN -> Not a Number

Ex:
const number = null

if(number){
    //Execute a command
}
else{
    //do nothing
}

the above condition will execute Else statement as variable 'number' is a falsy value as per javascript
*/

/* Class 

example 1:

class vegetable {
    constructor(name) {
      this.name = name
    }
  }

  const carrot = new vegetable("This is carrot")
  console.log(carrot.name)


example 2:

  class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age
    }
    greet() {
      return `hi ${this.name} you are ${this.age} years old`
    }
  }

  const solomon = new Person("Solomon", 24)
  console.log(solomon.greet())

example 3:

  class thermostat {
    constructor(temp) {
      this._temp = temp
    }
    get temperature() {
      return this._temp
    }
    set temperature(updatedTemp) {
      this._temp = updatedTemp
    }
  }

  const thermos = new thermostat(26)
  let temp = thermostat.temperature
  thermostat.temperature = 10
  temp = thermostat.temperature
  console.log(temp)
 */

/* Getter & Setter

Example 1:

let user = {
  get name() {
    return this._name;
  },

  set name(value) {
    if (value.length < 4) {
      console.log("Name is too short, need at least 4 characters");
      return;
    }
    this._name = value;
  }
};

user.name = "Pete";
console.log(user.name); // Pete

user.name = ""; // Name is too short...

Example 2:

function User(name, birthday) {
  this.name = name;
  this.birthday = birthday;

  // age is calculated from the current date and birthday
  Object.defineProperty(this, "age", {
    get() {
      let todayYear = new Date().getFullYear();
      return todayYear - this.birthday.getFullYear();
    }
  });
}

let john = new User("John", new Date(1992, 6, 1));

console.log( john.birthday ); // birthday is available
console.log( john.age );      // ...as well as the age */

/* Constructors and Prototypes

function Person(firstName, lastName, age, eyeColor) {
  this.firstName = firstName
  this.lastName = lastName
  this.age = age
  this.eyeColor = eyeColor
  this.changeName = function (name) {
    this.lastName = name
  }
}
Person.prototype.nationality = "English"

Person.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}

let myMother = new Person("John", "Doe", 55, "brown")
myMother.changeName("Sam")
const newArray = JSON.stringify(myMother) // Object.values(myMother)
document.getElementById("container").innerHTML = array1
console.log(myMother) 


*/

/* Sets: Sets is a collection with unique values
const letters = new Set(["a","b","c"]);

letters.add("a")
letters.add("a")
letters.add("d")
letters.add("c")

// List all Elements Method 1
let text = "";
letters.forEach (function(value) {
  text += value;
})
// List all Elements Method 2
let text = "";
for (const x of letters.values()) {
  text += x;
}

console.log(text)
console.log(letters instanceof Set)
*/

/* Maps
1. Maps are Directly iterable,
2. Maps have a size property,
3. Keys can be any datatype,
4. Keys are ordered by insertion,
5. Maps do not have default keys.

const fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
])

fruits.set("peach", 100)
fruits.set("melons", 600)

console.log(fruits.get("apples"))
console.log(fruits.size)
console.log(fruits.delete("oranges"))
console.log(fruits.has("oranges"))

let text = "";
fruits.forEach (function(value, key) {
  text += `${key} = ${value}\n`
})

console.log(text)

let newText = "";
for (const x of fruits.entries()) {
  newText += `${x}\n`
}
console.log(newText)

let text1 = 0
for (const x of fruits.values()) {
  text1 += x
}
console.log(text1)
console.log(fruits instanceof Map)
console.log(fruits.keys())

*/

/* Object Iterables

let counter = 0;
let limit = 5;
const iteratorObjectProtocol = {
  next: function() {
    counter++
    if (counter > limit)
      return {
        value: undefined,
        done: true
      }
    return {
      value: counter,
      done: false
    }
  }
}

const myCustomObject = {
  [Symbol.iterator]: function() {
    return iteratorObjectProtocol
  }
}
console.log([...myCustomObject]) // [1, 2]


let n = 0
const objectIterator = {
  next: function() {
    n += 10
    if (n >= 100) return {
      done: true
    }
    return {
      value: n,
      done: false
    }
  }
}

let myNumbers = {};

// Make it Iterable
myNumbers[Symbol.iterator] = function() {
  return objectIterator
}

let text = ""
for (const num of myNumbers) {
  text += num + " "
}
console.log(text)


function* myGenerator() {
  yield 1
  yield 2
  yield 3
}
const myGen = myGenerator()

console.log(myGen.next())
console.log(myGen.next())
console.log(myGen.next())
console.log(myGen.next()) */

