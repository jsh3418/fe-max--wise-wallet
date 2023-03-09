import getCurrentDate from "../utils/getCurrentDate.js";
import monthNames from "../constants/monthNames.js";

export default () => {
  const { year, month } = getCurrentDate();
  const monthName = monthNames[month - 1];

  const $year = document.querySelector("#year");
  const $month = document.querySelector("#month");
  const $monthName = document.querySelector("#month-name");

  $year.textContent = year;
  $month.textContent = month;
  $monthName.textContent = monthName;
};
