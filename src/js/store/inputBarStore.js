import { TRANSACTION_TYPE } from "../constants/TRANSACTION_TYPE.js";
import { getCurrentDate } from "../utils/getCurrentDate.js";

export const inputBarStore = {
  date: getCurrentDate(),
  transactionType: TRANSACTION_TYPE.EXPENDITURE,
  price: "",
  memo: null,
  payment: null,
  category: null,

  setDate(date) {
    this.date = date;
  },

  setPrice(price) {
    this.price = price;
  },

  getPrice() {
    return this.price;
  },

  setMemo(memo) {
    this.memo = memo;
  },

  setPayment(payment) {
    this.payment = payment;
  },

  setCategory(category) {
    this.category = category;
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
