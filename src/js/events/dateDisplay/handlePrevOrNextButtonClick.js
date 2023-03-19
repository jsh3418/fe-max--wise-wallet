import { initMainPage } from "../../init/initMainPage.js";
import { displayDateStore } from "../../store/displayDateStore.js";

export const handlePrevOrNextButtonClick = ({ target }) => {
  const isPrevButtonClick = target.closest("div").classList.contains("date-display__prev-button");
  const isNextButtonClick = target.closest("div").classList.contains("date-display__next-button");

  if (!isPrevButtonClick && !isNextButtonClick) {
    return;
  }

  if (isPrevButtonClick) {
    displayDateStore.moveToPrevMonth();
  }

  if (isNextButtonClick) {
    displayDateStore.moveToNextMonth();
  }

  renderDisplayDate();
  initMainPage();
};

const renderDisplayDate = () => {
  const $year = document.querySelector(".date-display__year");
  const $month = document.querySelector(".date-display__month");
  const $monthName = document.querySelector(".date-display__month-name");

  $year.textContent = displayDateStore.year;
  $month.textContent = displayDateStore.month;
  $monthName.textContent = displayDateStore.monthName;
};
