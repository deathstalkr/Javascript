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

/* Class example 1
class vegetable {
    constructor(name) {
      this.name = name
    }
  }

  const carrot = new vegetable("This is carrot")
  console.log(carrot.name)


  Class example 2

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

  Class example 3

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




