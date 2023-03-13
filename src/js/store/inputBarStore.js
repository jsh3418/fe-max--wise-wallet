import { TRANSACTION_TYPE } from "../constants/TRANSACTION_TYPE.js";
import { getCurrentDate } from "../utils/getCurrentDate.js";

export const inputBarStore = {
  date: getCurrentDate(),
  transactionType: TRANSACTION_TYPE.EXPENDITURE,
  price: null,
  memo: null,
  payment: null,
  category: null,

  setDate(date) {
    this.date = date;
  },

  setMemo(memo) {
    this.memo = memo;
  },

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
