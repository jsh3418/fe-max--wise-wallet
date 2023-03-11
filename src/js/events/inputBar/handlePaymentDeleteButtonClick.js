import { hideElement } from "../../utils/hideElement.js";
import { showElement } from "../../utils/showElement.js";
import { getDeletePaymentModalTemplate } from "../../views/modal/deletePayment.js";

export const handlePaymentDeleteButtonClick = ({ target }) => {
  if (!target.classList.contains("payment-dropdown__list-delete")) return;

  const $modal = document.querySelector(".modal");
  const targetPaymentText = target.previousElementSibling.textContent;
  const modalTemplate = getDeletePaymentModalTemplate(targetPaymentText);

  setModalTemplate($modal, modalTemplate);
  setModalButtonEvent($modal, target);
  showElement($modal);
};

const setModalTemplate = (element, template) => {
  element.innerHTML = template;
};

const setModalButtonEvent = (element, target) => {
  const $closeButton = document.querySelector(".modal-cancel-button");
  const $confirmButton = document.querySelector(".modal-confirm-button");

  $closeButton.addEventListener("click", () => {
    hideElement(element);
    element.innerHTML = "";
  });

  $confirmButton.addEventListener("click", () => {
    hideElement(element);
    element.innerHTML = "";
    target.parentElement.remove();
  });
};
