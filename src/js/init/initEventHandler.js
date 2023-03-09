import handlePrevButtonClick from "../events/handlePrevButtonClick.js";
import handleNextButtonClick from "../events/handleNextButtonClick.js";

export default () => {
  const $prevButton = document.querySelector(".prev-button");
  const $nextButton = document.querySelector(".next-button");

  $prevButton.addEventListener("click", handlePrevButtonClick);
  $nextButton.addEventListener("click", handleNextButtonClick);
};
