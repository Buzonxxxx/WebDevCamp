const inventory = [
  { title: 'Harry Potter', price: 10 },
  { title: 'Eloquent Javascript', price: 15}
]

function createBookShop(inventory) {
  return {
    inventory,   
    inventoryValue() {
      return this.inventory.reduce((total, book) => total + book.price, 0)
    },
    priceForTitle(title) {
      return this.inventory.find(book => book.title === title).price
    }
  }
}

const bookshop = createBookShop(inventory)

console.log(bookshop.inventoryValue())
console.log(bookshop.priceForTitle('Harry Potter'))
console.log(bookshop.inventory)


