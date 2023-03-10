import handleTypeIconClick from "./handleTypeIconClick.js";
import handlePriceInputKeyup from "./handlePriceInputKeyup.js";
import handlePaymentClick from "./handlePaymentClick.js";

const inputBarEventHandler = () => {
  const $typeIcon = document.querySelector(".type-icon");
  const $priceInput = document.querySelector("#price");
  const $payment = document.querySelector("#payment");

  $typeIcon.addEventListener("click", handleTypeIconClick);
  $priceInput.addEventListener("keyup", handlePriceInputKeyup);
  $payment.addEventListener("click", handlePaymentClick);
};

export default inputBarEventHandler;
