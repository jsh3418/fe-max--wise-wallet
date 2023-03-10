import MONTH_NAMES from "../constants/MONTH_NAMES.js";

const handlePrevButtonClick = () => {
  const $month = document.querySelector("#month");
  const $monthName = document.querySelector("#month-name");

  $month.textContent -= 1;

  if ($month.textContent < 1) {
    const $year = document.querySelector("#year");

    $year.textContent -= 1;
    $month.textContent = 12;
  }

  $monthName.textContent = MONTH_NAMES[$month.textContent - 1];
};

export default handlePrevButtonClick;
