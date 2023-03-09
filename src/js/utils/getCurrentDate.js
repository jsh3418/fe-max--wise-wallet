import monthNames from "../constants/monthName.js";

export default () => {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth() + 1;
  const date = currentDate.getDate();
  const monthName = monthNames[month - 1];

  return { year, month, date, monthName };
};
