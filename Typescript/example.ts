function addShipping(price: number, shipping: number) : number{
  return price + shipping;
}

addShipping(100, 10) // 110

// Object Interface
interface IAccount {
  name: string;
  balance: number;
  status?: string;
  deposit?: () => void;
}

let account: IAccount = {
  name: 'John',
  balance: 100
}

let account2: IAccount[] = [
  { name: 'John', balance: 100 },
  { name: 'Jane', balance: 200 }
]

// Class Interface
class InvestmentAccount implements IAccount {
  // public variable can be accessed outside the class
  constructor(public name: string, public balance: number) {}
  // private variable can only be accessed within the class
  private withdraw() {}
}