import { getCurrentDate } from "../utils/getCurrentDate.js";
import { MONTH_NAMES } from "../constants/MONTH_NAMES.js";

export const initDisplayDate = () => {
  const { year, month } = getCurrentDate();
  const monthName = MONTH_NAMES[month - 1];

  const $year = document.querySelector(".date-display__year");
  const $month = document.querySelector(".date-display__month");
  const $monthName = document.querySelector(".date-display__month-name");

  $year.textContent = year;
  $month.textContent = month;
  $monthName.textContent = monthName;
};
