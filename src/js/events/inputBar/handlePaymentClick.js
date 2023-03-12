import { handleDropdown } from "../../utils/handleDropdown.js";

export const handlePaymentClick = () => {
  const $payment = document.querySelector("#input-bar__payment");
  const $paymentDropdown = document.querySelector(".payment-dropdown");

  handleDropdown($payment, $paymentDropdown);
};
