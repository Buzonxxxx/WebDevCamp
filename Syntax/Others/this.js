/**
 * 'this' is a reference to object
 * use 'this' to access other props in obj
 */

const person = {
  first: "Cherilyn",
  last: "Sarkisian",
  nickName: "Cher",
  fullName() {
    const { first, last, nickName } = this;
    return `${first} ${last} AKA ${nickName}`;
  },
  printBio() {
    const fullName = this.fullName();
    console.log(`${fullName} is a person!`);
  },
  laugh: () => {
    console.log(this);
    console.log(`${this.nickName} says HAHAHAHAH`);
  },
};

// person.printBio(); // this 是左邊的person object

const printBio = person.printBio // this變成refer不到person object
// printBio()

// person.laugh(); // arrow function 會吃到global object, 所以盡量不要用在obj裡