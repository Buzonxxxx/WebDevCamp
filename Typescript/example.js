function addShipping(price, shipping) {
    return price + shipping;
}
addShipping(100, 10); // 110
var account = {
    name: 'John',
    balance: 100
};
var account2 = [
    { name: 'John', balance: 100 },
    { name: 'Jane', balance: 200 }
];
// Class Interface
var InvestmentAccount = /** @class */ (function () {
    // public variable can be accessed outside the class
    function InvestmentAccount(name, balance) {
        this.name = name;
        this.balance = balance;
    }
    // private variable can only be accessed within the class
    InvestmentAccount.prototype.withdraw = function () { };
    return InvestmentAccount;
}());
