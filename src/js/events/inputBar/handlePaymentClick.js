import { handleDropdown } from "../../utils/handleDropdown.js";

export const handlePaymentClick = () => {
  const $payment = document.querySelector("#payment");
  const $paymentDropdown = document.querySelector(".payment-dropdown");

  handleDropdown($payment, $paymentDropdown);
};
