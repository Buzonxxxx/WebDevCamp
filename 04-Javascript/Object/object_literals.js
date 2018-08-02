function createBookShop(inventory) {
  return {
    // inventory: inventory => inventory
    inventory,
    // inventoryValue(): function() {...} => inventoryValue() {...}
    inventoryValue() {
      return this.inventory.reduce((total, book) => total + book.price, 0)
    },
    priceForTitle(title) {
      return this.inventory.find(book => book.title === title).price
    }
  }
}

const inventory = [
  { title: 'Harry Potter', price: 10 },
  { title: 'Eloquent Javascript', price: 15}
]

const bookshop = createBookShop(inventory)

console.log(bookshop.inventoryValue())
console.log(bookshop.priceForTitle('Harry Potter'))


