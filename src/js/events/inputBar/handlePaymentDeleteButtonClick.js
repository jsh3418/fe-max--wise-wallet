import { hideElement } from "../../utils/hideElement.js";
import { showElement } from "../../utils/showElement.js";
import { getDeletePaymentModalTemplate } from "../../views/modal/deletePayment.js";

export const handlePaymentDeleteButtonClick = ({ target }) => {
  if (!target.classList.contains("payment-list-delete")) return;

  const $modal = document.querySelector(".modal");
  const removePayment = target.previousElementSibling.textContent;

  $modal.innerHTML = getDeletePaymentModalTemplate(removePayment);
  showElement($modal);

  const $closeButton = document.querySelector(".modal-close-button");
  const $confirmButton = document.querySelector(".modal-confirm-button");

  $closeButton.addEventListener("click", () => {
    hideElement($modal);
    $modal.innerHTML = "";
  });

  $confirmButton.addEventListener("click", () => {
    hideElement($modal);
    $modal.innerHTML = "";
    target.parentElement.remove();
  });
};
