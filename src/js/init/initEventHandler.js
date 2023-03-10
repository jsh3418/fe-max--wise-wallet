import dateDisplayEventHandler from "../events/dateDisplay/index.js";
import inputBarEventHandler from "../events/inputBar/index.js";

const initEventHandler = () => {
  dateDisplayEventHandler();
  inputBarEventHandler();
};

export default initEventHandler;
