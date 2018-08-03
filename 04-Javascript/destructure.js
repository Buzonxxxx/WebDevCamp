// Destructure

//array
const member = ['Mike', 'Louis', 'Levi', 'Lucas']
const [name1, name2, ...rest] = member
console.log(name1)
console.log(name2)
console.log(rest)

// obj
const obj = {
  firstName: 'John',
  lastName: 'Smith'
}
const { firstName, lastName } = obj
console.log(firstName)
console.log(lastName)

const { firstName: a, lastName: b } = obj
console.log(a)
console.log(b)

const savedField = {
  extension: 'jpg',
  name: 'repost',
  size: 14040
}
const fileSummary = ({ extension, name, size}, { color }) => {
  return `Color is ${color}, file name is ${name}.${extension} is of size ${size}`
}
console.log(fileSummary(savedField, { color: 'red' }))

// obj + array
const compaines = [
  { name: 'Google', location: 'Mountain View' },
  { name: 'Facebook', location: 'Menlo Park' },
  { name: 'Uber', location: 'San Francisco'}
]
const [{ location }] = compaines
console.log(location)

const Google = {
  locations: ['Mountain View', 'New York', 'London']
}
const { locations: [ location1 ] } = Google
console.log(location1)

// real case
const points = [
  [4, 5],
  [10, 1],
  [0, 40]
]
newPoints = points.map(([ x, y ]) => {
  return { x, y }
})
console.log(newPoints)  

// function
const calcAgeRetirement = (year) => {
  age = new Date().getFullYear() - year
  return [age, 65 - age]
}

const [age2, retirement] = calcAgeRetirement(1990)
console.log(age2)
console.log(retirement)