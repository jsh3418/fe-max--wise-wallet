import MONTH_NAMES from "../../constants/MONTH_NAMES.js";

const handleNextButtonClick = () => {
  const $month = document.querySelector("#month");
  const $monthName = document.querySelector("#month-name");

  $month.textContent = Number($month.textContent) + 1;

  if ($month.textContent > 12) {
    const $year = document.querySelector("#year");

    $year.textContent = Number($year.textContent) + 1;
    $month.textContent = 1;
  }

  $monthName.textContent = MONTH_NAMES[$month.textContent - 1];
};

export default handleNextButtonClick;
