import initDisplayDate from "./js/init/initDisplayDate.js";
import initEventHandler from "./js/init/initEventHandler.js";

const init = () => {
  initEventHandler();
  initDisplayDate();
};

document.addEventListener("DOMContentLoaded", init);
