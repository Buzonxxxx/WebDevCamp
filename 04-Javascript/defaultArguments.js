// class sample
class SmithPerson {
  constructor(firstName, yearOfBirth, lastName = 'Smith', nationality = 'American') {
  this.firstName = firstName
  this.yearOfBirth = yearOfBirth
  this.lastName = lastName
  this.nationality = nationality
  }
}
const john = new SmithPerson('John', 1990)
console.log(john)
const emily = new SmithPerson('Emily', 1983, 'Diaz', 'Spain')
console.log(emily)

// function sample
const cars = (car1="BMW", car2="Benz") => console.log(car1, car2)
cars()
cars("Toyota", "Honda")