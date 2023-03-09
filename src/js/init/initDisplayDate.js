import getCurrentDate from "../utils/getCurrentDate.js";

export default () => {
  const { year, month, monthName } = getCurrentDate();

  const $year = document.querySelector("#year");
  const $month = document.querySelector("#month");
  const $monthName = document.querySelector("#month-name");

  $year.textContent = year;
  $month.textContent = month;
  $monthName.textContent = monthName;
};
