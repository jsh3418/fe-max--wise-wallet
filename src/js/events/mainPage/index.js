import { handleFilterCheckBoxClick } from "./handleFilterCheckBoxClick.js";

export const initMainPageEventHandler = () => {
  const totalFilter = document.querySelector(".content-header__total-filter");

  totalFilter.addEventListener("click", handleFilterCheckBoxClick);
};
