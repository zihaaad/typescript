{
  // getter and getter
  class BankAccount {
    public readonly id: number;
    public name: string;
    protected _balance: number;

    constructor(id: number, name: string, balance: number) {
      this.id = id;
      this.name = name;
      this._balance = balance;
    }
    // addDeposit(account: number) {
    //   this._balance = this._balance + account;
    // }

    // set modifier
    set deposit(ammount: number) {
      this._balance = this.balance + ammount;
    }

    // getBalance() {
    //   return this._balance;
    // }

    // getter modifer
    get balance() {
      return this._balance;
    }
  }

  const poorAccount = new BankAccount(111, "Mr. Poor", 60);
  poorAccount.deposit = 40; // property like
  const myBalance = poorAccount.balance; // property like
  console.log(myBalance);

  //     poorAccount.addDeposit(0); // function to call
  //   const myBalance = poorAccount.getBalance(); // function to call
  //
}
