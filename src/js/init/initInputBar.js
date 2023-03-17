import { SOURCE } from "../constants/SOURCE.js";
import { getCurrentDate } from "../utils/getCurrentDate.js";

export const initInputBar = () => {
  initInputBarDate();
  initInputBarTransactionTypeIcon();
  initInputBarPrice();
  initInputBarMemo();
  initInputBarPayment();
  initInputBarCategory();
};

export const initInputBarDate = () => {
  const $date = document.querySelector("#input-bar__date");
  const { year, month, date } = getCurrentDate();
  const currentDate = { year, month, date };

  $date.value = Object.values(currentDate).reduce((acc, cur) => (cur < 10 ? acc.toString() + "0" + cur : acc + cur));
};

const initInputBarTransactionTypeIcon = () => {
  const $transactionType = document.querySelector(".input-bar__transaction-type");

  $transactionType.src = SOURCE.MINUS_ICON;
};

const initInputBarPrice = () => {
  const $price = document.querySelector("#input-bar__price");

  $price.value = "";
};

const initInputBarMemo = () => {
  const $memo = document.querySelector("#input-bar__memo");

  $memo.value = "";
};

const initInputBarPayment = () => {
  const $payment = document.querySelector(".input-bar__payment-text");

  $payment.textContent = "선택하세요";
};

const initInputBarCategory = () => {
  const $category = document.querySelector(".input-bar__category-text");

  $category.textContent = "선택하세요";
};
