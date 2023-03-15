import { createNode } from "../utils/createElement.js";
import { getTransactionLocalStorage } from "../utils/transactionLocalStorage.js";
import { getContentDetailListElement } from "../views/main/contentDetailList.js";

export const initMainPage = () => {
  renderContentList();
};

const renderContentList = () => {
  const $contentDetailContainer = document.querySelector(".content-detail__container");
  const transactions = getTransactionLocalStorage();

  transactions.forEach((element) => {
    const listObj = getContentDetailListElement(element);
    const node = createNode(listObj);

    $contentDetailContainer.appendChild(node);
  });
};
