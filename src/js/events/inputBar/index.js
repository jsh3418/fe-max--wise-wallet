import handlePaymentClick from "./handlePaymentClick.js";

const inputBarEventHandler = () => {
  const $payment = document.querySelector("#payment");

  $payment.addEventListener("click", handlePaymentClick);
};

export default inputBarEventHandler;
