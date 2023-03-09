import getCurrentDate from "../utils/getCurrentDate.js";
import MONTH_NAMES from "../constants/MONTH_NAMES.js";

export default () => {
  const { year, month } = getCurrentDate();
  const monthName = MONTH_NAMES[month - 1];

  const $year = document.querySelector("#year");
  const $month = document.querySelector("#month");
  const $monthName = document.querySelector("#month-name");

  $year.textContent = year;
  $month.textContent = month;
  $monthName.textContent = monthName;
};
