import { TRANSACTION_TYPE } from "../constants/TRANSACTION_TYPE.js";
import { getCurrentDate } from "../utils/getCurrentDate.js";
import { getUUID } from "../utils/getUUID.js";

export const inputBarStore = {
  id: getUUID(),
  date: getCurrentDate(),
  createdAt: null,
  transactionType: TRANSACTION_TYPE.EXPENDITURE,
  price: "",
  memo: null,
  payment: null,
  category: null,

  initStore() {
    this.id = getUUID();
    this.date = getCurrentDate();
    this.createdAt = null;
    this.transactionType = TRANSACTION_TYPE.EXPENDITURE;
    this.price = "";
    this.memo = null;
    this.payment = null;
    this.category = null;
  },

  setDate(date) {
    this.date = date;
  },

  getDate() {
    return this.date;
  },

  setCreatedAt(createdAt) {
    this.createdAt = createdAt;
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

  getMemo() {
    return this.memo;
  },

  setPayment(payment) {
    this.payment = payment;
  },

  getPayment() {
    return this.payment;
  },

  setCategory(category) {
    this.category = category;
  },

  getCategory() {
    return this.category;
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

  isAllFill() {
    return Boolean(this.date && this.price && this.memo && this.payment && this.category);
  },

  getAllProperty() {
    return {
      id: this.id,
      date: this.date,
      transactionType: this.transactionType,
      price: this.price,
      memo: this.memo,
      payment: this.payment,
      category: this.category,
    };
  },
};
