import { dateDisplayEventHandler } from "../events/dateDisplay/index.js";
import { inputBarEventHandler } from "../events/inputBar/index.js";

export const initEventHandler = () => {
  dateDisplayEventHandler();
  inputBarEventHandler();
};
