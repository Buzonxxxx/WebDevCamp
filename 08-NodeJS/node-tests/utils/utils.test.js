const expect = require('expect')

const utils = require('./utils')
it('should add two numbers', () => {
  let res = utils.add(33,11)
  expect(res)
    .toBe(44)
    .toBeA('number')
})  

it('should async add two numbers', (done) => {
  utils.asyncAdd(33,11, (sum) => {
    expect(sum).toBe(44).toBeA('number')
    done()
  })
}) 

it('should square the number', () => {
  let res = utils.square(2)
  expect(res).toBe(4).toBeA('number')
})


it('should async square the number', (done) => {
  utils.asyncSquare(3, square => {
    expect(square).toBe(9).toBeA('number')
    done()
  })
})
// should verify first and last names are set
// assert it includes firstName and lastName with proper values

it('should verify first and last names are set', () => {
  let user = {
    location: 'Taipei',
    age: 35
  }
  let res = utils.setName(user, 'Louis Liao')

  expect(res).toInclude({
    firstName: 'Louis', 
    lastName: 'Liao'
  })
})

// it('should expect some values', () => {
//   // expect(12).toNotBe(11)
//   // expect({name: 'louis'}).toNotEqual({name: 'Louis'})
//   // expect([2,3,4]).toExclude(1)
//   expect({
//     name: 'Louis',
//     age: 35,
//     location: 'Taipei'
//   }).toExclude({
//     age: 34
//   })
// })
