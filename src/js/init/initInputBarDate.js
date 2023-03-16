import { getCurrentDate } from "../utils/getCurrentDate.js";

export const initInputBarDate = () => {
  const $date = document.querySelector("#input-bar__date");
  const { year, month, date } = getCurrentDate();
  const currentDate = { year, month, date };

  $date.value = Object.values(currentDate).reduce((acc, cur) => (cur < 10 ? acc.toString() + "0" + cur : acc + cur));
};
