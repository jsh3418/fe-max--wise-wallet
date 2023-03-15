import { initDisplayDate } from "./js/init/initDisplayDate.js";
import { initInputBarDate } from "./js/init/initInputBarDate.js";
import { initEventHandler } from "./js/init/initEventHandler.js";
import { initMainPage } from "./js/init/initMainPage.js";

const init = () => {
  initDisplayDate();
  initInputBarDate();
  initEventHandler();
  initMainPage();
};

document.addEventListener("DOMContentLoaded", init);
