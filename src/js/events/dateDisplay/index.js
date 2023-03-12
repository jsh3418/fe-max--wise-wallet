import { handlePrevButtonClick } from "./handlePrevButtonClick.js";
import { handleNextButtonClick } from "./handleNextButtonClick.js";

export const dateDisplayEventHandler = () => {
  const $prevButton = document.querySelector(".date-display__prev-button");
  const $nextButton = document.querySelector(".date-display__next-button");

  $prevButton.addEventListener("click", handlePrevButtonClick);
  $nextButton.addEventListener("click", handleNextButtonClick);
};
