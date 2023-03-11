import { MONTH_NAMES } from "../../constants/MONTH_NAMES.js";

export const handleNextButtonClick = () => {
  const $month = document.querySelector(".date-display__month");
  const $monthName = document.querySelector(".date-display__month-name");

  $month.textContent = Number($month.textContent) + 1;

  if ($month.textContent > 12) {
    const $year = document.querySelector(".date-display__year");

    $year.textContent = Number($year.textContent) + 1;
    $month.textContent = 1;
  }

  $monthName.textContent = MONTH_NAMES[$month.textContent - 1];
};
