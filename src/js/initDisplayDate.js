const getCurrentDate = () => {
  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth() + 1;
  const monthName = monthNames[month - 1];

  return [year, month, monthName];
};

const initDisplayDate = () => {
  const [year, month, monthName] = getCurrentDate();

  const $displayDateYear = document.querySelector("#year");
  const $displayDateMonth = document.querySelector("#month");
  const $displayDateMonthName = document.querySelector("#month-name");

  $displayDateYear.textContent = year;
  $displayDateMonth.textContent = month;
  $displayDateMonthName.textContent = monthName;
};

export default () => {
  initDisplayDate();
};
