import MONTH_NAMES from "../constants/MONTH_NAMES.js";

export default () => {
  const $year = document.querySelector("#year");
  const $month = document.querySelector("#month");
  const $monthName = document.querySelector("#month-name");

  $month.textContent -= 1;

  if ($month.textContent < 1) {
    $year.textContent -= 1;
    $month.textContent = 12;
  }

  $monthName.textContent = MONTH_NAMES[$month.textContent - 1];
};
