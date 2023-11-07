{
  // access modifiers
  class BankAccount {
    public readonly id: number;
    public name: string;
    private _balance: number;

    constructor(id: number, name: string, balance: number) {
      this.id = id;
      this.name = name;
      this._balance = balance;
    }
    addDeposit(account: number) {
      this._balance = this._balance + account;
    }
    private getBalance() {
      return this._balance;
    }
    getHiddenMethod() {
      return this.getBalance();
    }
  }

  class StudentAccount extends BankAccount {
    test() {
      this.getHiddenMethod();
    }
  }

  const poorAccount = new BankAccount(111, "Mr. Poor", 20);
  poorAccount.addDeposit(20);
  const myBalance = poorAccount.getHiddenMethod();
  console.log(myBalance);
}
