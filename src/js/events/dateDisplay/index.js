import { handlePrevOrNextButtonClick } from "./handlePrevOrNextButtonClick.js";

export const dateDisplayEventHandler = () => {
  const $dateDisplay = document.querySelector(".date-display");

  $dateDisplay.addEventListener("click", handlePrevOrNextButtonClick);
};
