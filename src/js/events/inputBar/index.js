import { handleTypeIconClick } from "./handleTypeIconClick.js";
import { handlePriceInputKeyup } from "./handlePriceInputKeyup.js";
import { handlePaymentClick } from "./handlePaymentClick.js";
import { handlePaymentDeleteButtonClick } from "./handlePaymentDeleteButtonClick.js";

export const inputBarEventHandler = () => {
  const $typeIcon = document.querySelector(".type-icon");
  const $priceInput = document.querySelector("#price");
  const $payment = document.querySelector("#payment");
  const $paymentUl = document.querySelector(".payment-dropdown-ul");

  $typeIcon.addEventListener("click", handleTypeIconClick);
  $priceInput.addEventListener("keyup", handlePriceInputKeyup);
  $payment.addEventListener("click", handlePaymentClick);
  $paymentUl.addEventListener("click", handlePaymentDeleteButtonClick);
};
