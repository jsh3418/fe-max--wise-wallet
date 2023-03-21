import { handleFilterCheckBoxClick } from "./handleFilterCheckBoxClick.js";
import { handleContentClick } from "./handleContentClick.js";

export const initMainPageEventHandler = () => {
  const $totalFilter = document.querySelector(".content-header__total-filter");
  const $content = document.querySelector("#content");

  $totalFilter.addEventListener("click", handleFilterCheckBoxClick);
  $content.addEventListener("click", handleContentClick);
};
