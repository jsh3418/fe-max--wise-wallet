import { initMainPage } from "../../init/initMainPage.js";
import { hideElement } from "../../utils/hideElement.js";
import { showElement } from "../../utils/showElement.js";
import { getTransactionLocalStorage, setTransactionLocalStorage } from "../../utils/transactionLocalStorage.js";
import { getDeleteTransactionModalTemplate } from "../../views/modal/deleteTransaction.js";

export const handleContentClick = ({ target }) => {
  if (isDeleteButtonClick(target)) {
    const $modal = document.querySelector(".modal");
    const targetId = target.closest("li").dataset.id;
    const targetData = findTargetData(targetId);

    setModalTemplate($modal, targetData);
    setModalButtonEvent($modal, targetId);
    showElement($modal);
  }
};

const isDeleteButtonClick = (target) => {
  return target.closest(".content-detail__delete-button");
};

const findTargetData = (targetId) => {
  const transactions = getTransactionLocalStorage();

  return transactions.find((transaction) => transaction.id === targetId);
};

const setModalTemplate = (modal, targetData) => {
  modal.innerHTML = getDeleteTransactionModalTemplate(targetData);
};

const setModalButtonEvent = (element, targetId) => {
  const $closeButton = element.querySelector(".modal-cancel-button");
  const $confirmButton = element.querySelector(".modal-confirm-button");

  $closeButton.addEventListener("click", () => {
    hideElement(element);
  });

  $confirmButton.addEventListener("click", ({ target }) => {
    handleTransactionDelete(target, targetId);
  });
};

const handleTransactionDelete = (target, targetId) => {
  const transactions = getTransactionLocalStorage();
  const filteredTransactions = transactions.filter((transaction) => transaction.id !== targetId);

  setTransactionLocalStorage(filteredTransactions);
  initMainPage();
  hideElement(target.closest(".modal"));
};
