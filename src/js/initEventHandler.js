import handleNextButtonClick from "./events/handleNextButtonClick.js";
import handlePrevButtonClick from "./events/handlePrevButtonClick.js";

export default () => {
  const $prevButton = document.querySelector(".prev-button");
  const $nextButton = document.querySelector(".next-button");

  $prevButton.addEventListener("click", handlePrevButtonClick);
  $nextButton.addEventListener("click", handleNextButtonClick);
};
