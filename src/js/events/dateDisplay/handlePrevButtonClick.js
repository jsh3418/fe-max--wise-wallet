import { MONTH_NAMES } from "../../constants/MONTH_NAMES.js";

export const handlePrevButtonClick = () => {
  const $month = document.querySelector(".date-display__month");
  const $monthName = document.querySelector(".date-display__month-name");

  $month.textContent -= 1;

  if ($month.textContent < 1) {
    const $year = document.querySelector(".date-display__year");

    $year.textContent -= 1;
    $month.textContent = 12;
  }

  $monthName.textContent = MONTH_NAMES[$month.textContent - 1];
};
