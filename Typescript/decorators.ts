function MenuItem(itemID: string) {
  return function(value, context) {
    return class extends value {
      id = itemID;
    } 
  }
}

@MenuItem("abc")
class Pizza {
  id : string;
}

class Hamburger {
  id: string;
}

console.log(new Pizza());