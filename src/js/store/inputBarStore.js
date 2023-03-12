class InputBarStore {
  constructor() {
    this.transactionType = "expenditure";
  }

  toggleTransactionType() {
    if (this.transactionType === "expenditure") {
      this.transactionType = "income";

      return;
    }

    if (this.transactionType === "income") {
      this.transactionType = "expenditure";

      return;
    }
  }
}

export const inputBarStore = new InputBarStore();
