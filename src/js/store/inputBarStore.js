export const inputBarStore = {
  transactionType: "expenditure",

  toggleTransactionType() {
    if (this.transactionType === "expenditure") {
      this.transactionType = "income";

      return;
    }

    if (this.transactionType === "income") {
      this.transactionType = "expenditure";

      return;
    }
  },

  isTransactionExpenditure() {
    return this.transactionType === "expenditure";
  },
};
