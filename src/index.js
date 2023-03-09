import initDisplayDate from "./js/initDisplayDate.js";
import initEventHandler from "./js/initEventHandler.js";

const init = () => {
  initEventHandler();
  initDisplayDate();
};

document.addEventListener("DOMContentLoaded", init);
