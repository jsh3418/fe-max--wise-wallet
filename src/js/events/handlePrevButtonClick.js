import monthNames from "../constants/monthNames.js";

export default () => {
  const $year = document.querySelector("#year");
  const $month = document.querySelector("#month");
  const $monthName = document.querySelector("#month-name");

  $month.textContent -= 1;

  if ($month.textContent === "0") {
    $year.textContent -= 1;
    $month.textContent = 12;
  }

  $monthName.textContent = monthNames[$month.textContent - 1];
};
