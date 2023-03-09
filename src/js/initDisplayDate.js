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

  const $year = document.querySelector("#year");
  const $month = document.querySelector("#month");
  const $monthName = document.querySelector("#month-name");

  $year.textContent = year;
  $month.textContent = month;
  $monthName.textContent = monthName;
};

export default () => {
  initDisplayDate();
};
