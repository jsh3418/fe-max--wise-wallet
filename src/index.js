import initDisplayDate from "./js/init/initDisplayDate.js";
import initEventHandler from "./js/init/initEventHandler.js";
import initInputBarDate from "./js/init/initInputBarDate.js";

const init = () => {
  initEventHandler();
  initDisplayDate();
  initInputBarDate();
};

document.addEventListener("DOMContentLoaded", init);
