import { displayDateStore } from "../store/displayDateStore.js";

export const initDisplayDate = () => {
  displayDateStore.initStore();
  renderDisplayDate();
};

const renderDisplayDate = () => {
  const $year = document.querySelector(".date-display__year");
  const $month = document.querySelector(".date-display__month");
  const $monthName = document.querySelector(".date-display__month-name");

  $year.textContent = displayDateStore.year;
  $month.textContent = displayDateStore.month;
  $monthName.textContent = displayDateStore.monthName;
};
