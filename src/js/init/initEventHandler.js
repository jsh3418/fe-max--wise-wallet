import handlePrevButtonClick from "../events/handlePrevButtonClick.js";
import handleNextButtonClick from "../events/handleNextButtonClick.js";
import handleTypeIconClick from "../events/handleTypeIconClick.js";

export default () => {
  const $prevButton = document.querySelector(".prev-button");
  const $nextButton = document.querySelector(".next-button");
  const $typeIcon = document.querySelector(".type-icon");

  $prevButton.addEventListener("click", handlePrevButtonClick);
  $nextButton.addEventListener("click", handleNextButtonClick);
  $typeIcon.addEventListener("click", handleTypeIconClick);
};
