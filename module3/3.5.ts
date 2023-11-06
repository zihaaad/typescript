{
  // access modifiers
  class BankAccount {
    public readonly id: number;
    public name: string;
    protected _balance: number;

    constructor(id: number, name: string, balance: number) {
      this.id = id;
      this.name = name;
      this._balance = balance;
    }
    addDeposit(account: number) {
      this._balance = this._balance + account;
    }
    getBalance() {
      return this._balance;
    }
  }

  class StudentAccount extends BankAccount {
    test() {
      this._balance;
    }
  }

  const poorAccount = new BankAccount(111, "Mr. Poor", 20);
  poorAccount.addDeposit(0);
  const myBalance = poorAccount.getBalance();
  console.log(myBalance);
}
