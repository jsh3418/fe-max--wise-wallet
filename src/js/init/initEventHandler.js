import handlePrevButtonClick from "../events/handlePrevButtonClick.js";
import handleNextButtonClick from "../events/handleNextButtonClick.js";
import handleTypeIconClick from "../events/handleTypeIconClick.js";
import handlePriceInputKeyup from "../events/handlePriceInputKeyup.js";
import inputBarEventHandler from "../events/inputBar/index.js";

const initEventHandler = () => {
  const $prevButton = document.querySelector(".prev-button");
  const $nextButton = document.querySelector(".next-button");
  const $typeIcon = document.querySelector(".type-icon");
  const $priceInput = document.querySelector("#price");

  $prevButton.addEventListener("click", handlePrevButtonClick);
  $nextButton.addEventListener("click", handleNextButtonClick);
  $typeIcon.addEventListener("click", handleTypeIconClick);
  $priceInput.addEventListener("keyup", handlePriceInputKeyup);

  inputBarEventHandler();
};

export default initEventHandler;
