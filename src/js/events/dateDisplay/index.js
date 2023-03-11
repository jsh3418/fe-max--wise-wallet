import { handlePrevButtonClick } from "./handlePrevButtonClick.js";
import { handleNextButtonClick } from "./handleNextButtonClick.js";

export const dateDisplayEventHandler = () => {
  const $prevButton = document.querySelector(".prev-button");
  const $nextButton = document.querySelector(".next-button");

  $prevButton.addEventListener("click", handlePrevButtonClick);
  $nextButton.addEventListener("click", handleNextButtonClick);
};
