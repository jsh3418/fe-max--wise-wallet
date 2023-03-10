import initDisplayDate from "./js/init/initDisplayDate.js";
import initInputBarDate from "./js/init/initInputBarDate.js";
import initEventHandler from "./js/init/initEventHandler.js";

const init = () => {
  initDisplayDate();
  initInputBarDate();
  initEventHandler();
};

document.addEventListener("DOMContentLoaded", init);
