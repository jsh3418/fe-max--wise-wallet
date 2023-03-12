import { getCurrentDate } from "../utils/getCurrentDate.js";

export const initInputBarDate = () => {
  const $date = document.querySelector("#input-bar__date");
  const currentDate = getCurrentDate();

  $date.value = Object.values(currentDate).reduce((acc, cur) => (cur < 10 ? acc.toString() + "0" + cur : acc + cur));
};
