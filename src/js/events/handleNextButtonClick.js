import monthNames from "../constants/monthName.js";

export default () => {
  const $year = document.querySelector("#year");
  const $month = document.querySelector("#month");
  const $monthName = document.querySelector("#month-name");

  $month.textContent = Number($month.textContent) + 1;

  if ($month.textContent === "13") {
    $year.textContent = Number($year.textContent) + 1;
    $month.textContent = 1;
  }

  $monthName.textContent = monthNames[$month.textContent - 1];
};
