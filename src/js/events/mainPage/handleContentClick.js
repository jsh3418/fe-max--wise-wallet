import { initMainPage } from "../../init/initMainPage.js";
import { hideElement } from "../../utils/hideElement.js";
import { showElement } from "../../utils/showElement.js";
import { getTransactionLocalStorage, setTransactionLocalStorage } from "../../utils/transactionLocalStorage.js";
import { getDeleteTransactionModalTemplate } from "../../views/modal/deleteTransaction.js";
import { inputBarStore } from "../../store/inputBarStore.js";
import { TRANSACTION_TYPE } from "../../constants/TRANSACTION_TYPE.js";
import { CATEGORIES } from "../../constants/CATEGORIES.js";
import { SOURCE } from "../../constants/SOURCE.js";

export const handleContentClick = ({ target }) => {
  if (isDeleteButtonClick(target)) {
    const $modal = document.querySelector(".modal");
    const targetId = target.closest("li").dataset.id;
    const targetData = findTargetData(targetId);

    setModalTemplate($modal, targetData);
    setModalButtonEvent($modal, targetId);
    showElement($modal);

    return;
  }

  const contentLi = target.closest(".content-detail__list");

  if (!contentLi) {
    return;
  }
  // 클릭했을 때 해당 li의 클래스를 content-detail__list--selected로 수정한다.
  contentLi.classList = "content-detail__list--selected";

  // 외부를 클릭했을 때 클래스가 되돌아간다.
  const handleContentLiOutsideClick = ({ target }) => {
    if (target.closest(".content-detail__list--selected") === contentLi) {
      return;
    }

    contentLi.classList = "content-detail__list";
    document.removeEventListener("click", handleContentLiOutsideClick);
  };

  document.addEventListener("click", handleContentLiOutsideClick);

  // inputBarStore에 target data id를 찾아 데이터를 저장한다.
  const { id, date, transactionType, price, memo, payment, category } = findTargetData(contentLi.dataset.id);

  if ((transactionType === TRANSACTION_TYPE.EXPENDITURE) !== inputBarStore.isTransactionExpenditure()) {
    inputBarStore.toggleTransactionType();
  }

  inputBarStore.setId(id);
  inputBarStore.setDate(date);
  inputBarStore.setPrice(price);
  inputBarStore.setMemo(memo);
  inputBarStore.setPayment(payment);
  inputBarStore.setCategory(category);

  // inputBarStore에 데이터로 inputBar 영역에 value로 넣는다.
  const dateInput = document.querySelector("#input-bar__date");
  const priceInput = document.querySelector("#input-bar__price");
  const memoInput = document.querySelector("#input-bar__memo");
  const paymentText = document.querySelector(".input-bar__payment-text");
  const categoryText = document.querySelector(".input-bar__category-text");
  const newDate = new Date(inputBarStore.getDate());
  const transactionTypeImage = document.querySelector(".input-bar__transaction-type");

  if (!inputBarStore.isTransactionExpenditure()) {
    transactionTypeImage.src = SOURCE.PLUS_ICON;
  } else {
    transactionTypeImage.src = SOURCE.MINUS_ICON;
  }

  dateInput.value = `${newDate.getFullYear()}${String(newDate.getMonth() + 1).padStart(2, "0")}${String(newDate.getDate()).padStart(2, "0")}`;
  priceInput.value = inputBarStore.getPrice().toLocaleString();
  memoInput.value = inputBarStore.getMemo();
  paymentText.textContent = inputBarStore.getPayment();
  categoryText.textContent =
    CATEGORIES[inputBarStore.isTransactionExpenditure() ? TRANSACTION_TYPE.EXPENDITURE : TRANSACTION_TYPE.INCOME][inputBarStore.getCategory()];
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

const isDeleteButtonClick = (target) => {
  return target.closest(".content-detail__delete-button");
};
