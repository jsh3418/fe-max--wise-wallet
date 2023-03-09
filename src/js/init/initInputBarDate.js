import getCurrentDate from "../utils/getCurrentDate.js";

export default () => {
  const $date = document.querySelector("#date");
  const currentDate = getCurrentDate();

  $date.value = Object.values(currentDate)
    .map((element) => (element < 10 ? element.toString().padStart(2, "0") : element))
    .join("");
};
