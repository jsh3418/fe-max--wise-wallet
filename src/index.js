import { initDisplayDate } from "./js/init/initDisplayDate.js";
import { initEventHandler } from "./js/init/initEventHandler.js";
import { initMainPage } from "./js/init/initMainPage.js";
import { initInputBar } from "./js/init/initInputBar.js";

const init = () => {
  initDisplayDate();
  initInputBar();
  initEventHandler();
  initMainPage();
};

document.addEventListener("DOMContentLoaded", init);
