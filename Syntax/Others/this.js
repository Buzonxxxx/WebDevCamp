/**
 * 'this' is a reference to object
 * use 'this' to access other props in obj
 *
 *
 *
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

// person.laugh(); // arrow function 會吃到global object, 所以盡量不要用在obj裡面

// const annoyer = {
//   phrases: ["literally", "cray cray", "I can't even", "Totes!", "YOLO", "Can't Stop, Won't Stop"],
//   pickPhrase() {
//     const {
//       phrases
//     } = this;
//     const idx = Math.floor(Math.random() * phrases.length);
//     return phrases[idx]
//   },
//   start() {
//     //Use an arrow function to avoid getting a different 'this':
//     this.timerId = setInterval(() => {
//       console.log(this.pickPhrase())
//     }, 3000)
//   },
//   stop() {
//     clearInterval(this.timerId);
//     console.log("PHEW THANK HEAVENS THAT IS OVER!")
//   }
// }

// annoyer.start()