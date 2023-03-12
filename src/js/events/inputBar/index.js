import { handleTransactionTypeClick } from "./handleTransactionTypeClick.js";
import { handlePriceInputKeyup } from "./handlePriceInputKeyup.js";
import { handlePaymentClick } from "./handlePaymentClick.js";
import { handlePaymentDeleteButtonClick } from "./handlePaymentDeleteButtonClick.js";
import { handlePaymentListClick } from "./handlePaymentListClick.js";
import { handleCategoryClick } from "./handleCategoryClick.js";

export const inputBarEventHandler = () => {
  const $typeIcon = document.querySelector(".input-bar__transaction-type");
  const $priceInput = document.querySelector("#input-bar__price");
  const $payment = document.querySelector("#input-bar__payment");
  const $paymentUl = document.querySelector(".payment-dropdown__ul");
  const $category = document.querySelector("#input-bar__category");

  $typeIcon.addEventListener("click", handleTransactionTypeClick);
  $priceInput.addEventListener("keyup", handlePriceInputKeyup);
  $payment.addEventListener("click", handlePaymentClick);
  $paymentUl.addEventListener("click", handlePaymentDeleteButtonClick);
  $paymentUl.addEventListener("click", handlePaymentListClick);
  $category.addEventListener("click", handleCategoryClick);
};
