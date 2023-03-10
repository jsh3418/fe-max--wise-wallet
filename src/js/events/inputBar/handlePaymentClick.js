import showElement from "../../utils/showElement.js";
import hideElement from "../../utils/hideElement.js";

const handlePaymentClick = () => {
  const $payment = document.querySelector("#payment");
  const $paymentDropdown = document.querySelector(".payment-dropdown");

  showElement($paymentDropdown);
  handleDropdownBlur($payment, $paymentDropdown);
};

const handleDropdownBlur = ($payment, $paymentDropdown) => {
  const hideDropDown = () => {
    hideElement($paymentDropdown);
    $payment.removeEventListener("blur", hideDropDown);
  };

  $payment.addEventListener("blur", hideDropDown);
};

export default handlePaymentClick;
