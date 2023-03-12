import { TRANSACTION_TYPE } from "../constants/TRANSACTION_TYPE.js";

export const inputBarStore = {
  transactionType: TRANSACTION_TYPE.EXPENDITURE,

  toggleTransactionType() {
    if (this.transactionType === TRANSACTION_TYPE.EXPENDITURE) {
      this.transactionType = TRANSACTION_TYPE.INCOME;

      return;
    }

    if (this.transactionType === TRANSACTION_TYPE.INCOME) {
      this.transactionType = TRANSACTION_TYPE.EXPENDITURE;

      return;
    }
  },

  isTransactionExpenditure() {
    return this.transactionType === TRANSACTION_TYPE.EXPENDITURE;
  },
};
