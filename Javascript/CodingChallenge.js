/*
1. Create an array with some years where persons were born
2. Create an empty array (just [])
3. Use a loop to fill the array with the ages of the persons
4. Use another loop to log into the console whether each person is of full age (18 or older), as well as their age
5. Finally, create a function called printFullAge which receives the vector of years as an argument, 
executes the steps 2., 3. and 4. and returens a vector of true/false boolean values: 
true if the person is of full age (>= 18 years) and false if not (< 18 years)
6. Call the function with two dfiierent vectors and store the results in two variables: full_1 and full_2

Example input: [1965, 2008, 1992]
Example output: [true, false, true]
*/

const printFullAge = birthYear => {
  let age = []
  let fullAges = []
  birthYear.forEach(birthYear => age.push(2017 - birthYear))
  age.forEach(age => {
    if (age >= 18) {
      console.log("person is " + age + " years old, and is of full age.")
      fullAges.push(true)
    } else {
      console.log("person is " + age + " years old, and is NOT of full age.")
      fullAges.push(false)
    }
  })
  return fullAges
}
  const birthYear = [1983, 2000, 2001, 1990, 1977]
  const full_1 = printFullAge(birthYear)
  const full_2 = printFullAge([2012, 1916, 1999])
  console.log(full_1)
  console.log(full_2)