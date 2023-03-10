import getCurrentDate from "../utils/getCurrentDate.js";

const initInputBarDate = () => {
  const $date = document.querySelector("#date");
  const currentDate = getCurrentDate();

  $date.value = Object.values(currentDate).reduce((acc, cur) => (cur < 10 ? acc.toString() + "0" + cur : acc + cur));
};

export default initInputBarDate;
