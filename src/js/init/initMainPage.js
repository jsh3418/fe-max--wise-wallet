import { TRANSACTION_TYPE } from "../constants/TRANSACTION_TYPE.js";
import { displayDateStore } from "../store/displayDateStore.js";
import { createElement } from "../utils/createElement.js";
import { getTransactionLocalStorage } from "../utils/transactionLocalStorage.js";
import { WEEKDAY } from "../constants/WEEKDAY.js";
import { getContentDetailList } from "../views/mainPage/contentDetailList.js";
import { getContentInfo } from "../views/mainPage/contentInfo.js";
import { getContentHeader } from "../views/mainPage/contentHeader.js";
import { SOURCE } from "../constants/SOURCE.js";
import { initMainPageEventHandler } from "../events/mainPage/index.js";

export const initMainPage = () => {
  const transactions = getTransactionLocalStorage();
  const transactionObj = getTransactionsByDisplayDate(transactions);
  const $mainInner = document.querySelector(".main__inner");

  clearElement($mainInner);

  if (Object.keys(transactionObj).length === 0) {
    renderNoSearchImage();

    return;
  }

  renderContentHeader(transactionObj, $mainInner);
  renderContent();
  renderContentList(transactionObj);
  initMainPageEventHandler();
};

export const renderFilteredContentList = () => {
  const transactions = getTransactionLocalStorage();
  const filterTransactions = filterTransactionsByCheckbox(transactions);
  const transactionObj = getTransactionsByDisplayDate(filterTransactions);
  const $content = document.querySelector("#content");

  removeElement($content);
  renderContent();
  renderContentList(transactionObj);
  renderContentHeaderListCount(transactionObj);
  initMainPageEventHandler();
};

const renderNoSearchImage = () => {
  const $mainInner = document.querySelector(".main__inner");
  const img = document.createElement("img");
  img.classList.add("main__no-search-image");
  img.src = SOURCE.NO_SEARCH;
  $mainInner.appendChild(img);
};

const removeElement = (element) => {
  element.remove();
};

const clearElement = (element) => {
  element.innerHTML = "";
};

const getTransactionsByDisplayDate = (transactions) => {
  const transactionObj = {};

  transactions
    ?.filter((transaction) => {
      const transactionDate = new Date(transaction.date);

      return transactionDate.getMonth() + 1 === displayDateStore.month && transactionDate.getFullYear() === displayDateStore.year;
    })
    .forEach((transaction) => {
      const month = new Date(transaction.date).getDate();

      if (!transactionObj[month]) {
        transactionObj[month] = [transaction];

        return;
      }

      transactionObj[month] = [...transactionObj[month], transaction];
    });

  return transactionObj;
};

const filterTransactionsByCheckbox = (transactions) => {
  const isIncomeCheck = document.querySelector(".content-header__income-filter-checkbox").classList.contains("checked");
  const isExpenditureCheck = document.querySelector(".content-header__expenditure-filter-checkbox").classList.contains("checked");

  if (isIncomeCheck && isExpenditureCheck) {
    return transactions;
  }

  if (isIncomeCheck) {
    return transactions.filter((transaction) => transaction.transactionType === TRANSACTION_TYPE.INCOME);
  }

  if (isExpenditureCheck) {
    return transactions.filter((transaction) => transaction.transactionType === TRANSACTION_TYPE.EXPENDITURE);
  }

  return [];
};

const renderContentHeader = (transactionObj, $mainInner) => {
  const transactions = Object.values(transactionObj);

  const totalCount = transactions.reduce((acc, cur) => acc + cur.length, 0);
  const incomeValue = transactions.reduce(
    (acc, cur) => acc + cur.reduce((acc, cur) => (cur.transactionType === TRANSACTION_TYPE.INCOME ? acc + Number(cur.price) : acc), 0),
    0
  );
  const expenditureValue = transactions.reduce(
    (acc, cur) => acc + cur.reduce((acc, cur) => (cur.transactionType === TRANSACTION_TYPE.EXPENDITURE ? acc + Number(cur.price) : acc), 0),
    0
  );

  const headerObj = getContentHeader({ count: totalCount, incomeValue, expenditureValue });
  const node = createElement(headerObj);

  $mainInner.appendChild(node);
};

const renderContent = () => {
  const $mainInner = document.querySelector(".main__inner");
  const content = document.createElement("div");
  content.id = "content";

  const contentInner = document.createElement("div");
  contentInner.classList.add("content__inner");

  content.appendChild(contentInner);
  $mainInner.appendChild(content);
};

const renderContentList = (transactionObj) => {
  const $content = document.querySelector(".content__inner");
  const dates = Object.keys(transactionObj);

  dates.forEach((date) => {
    const contentInfo = createContentInfo(transactionObj, date);
    const contentList = createContentList(transactionObj, date);

    $content.insertAdjacentElement("afterbegin", contentList);
    $content.insertAdjacentElement("afterbegin", contentInfo);
  });
};

const createContentInfo = (transactionObj, date) => {
  const month = displayDateStore.month;
  const day = WEEKDAY[new Date(transactionObj[date][0].date).getDay()];
  const incomeValue = transactionObj[date].reduce((acc, cur) => (cur.transactionType === TRANSACTION_TYPE.INCOME ? acc + Number(cur.price) : acc), 0);
  const expenditureValue = transactionObj[date].reduce(
    (acc, cur) => (cur.transactionType === TRANSACTION_TYPE.EXPENDITURE ? acc + Number(cur.price) : acc),
    0
  );

  const contentInfo = getContentInfo({ month, date, day, incomeValue, expenditureValue });
  const contentInfoNode = createElement(contentInfo);

  return contentInfoNode;
};

const createContentList = (transactionObj, date) => {
  const ul = document.createElement("ul");
  ul.classList.add("content-detail__container");

  transactionObj[date].forEach((element) => {
    const listObj = getContentDetailList(element);
    const node = createElement(listObj);

    ul.appendChild(node);
  });

  return ul;
};

const renderContentHeaderListCount = (transactionObj) => {
  const $listCount = document.querySelector(".content-header__list-count");
  const transactionCount = Object.values(transactionObj).reduce((acc, cur) => acc + cur.length, 0);

  $listCount.textContent = `전체 내역 ${transactionCount}건`;
};
