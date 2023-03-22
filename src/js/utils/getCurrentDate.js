export const getCurrentDate = () => {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth() + 1;
  const date = currentDate.getDate();
  const day = currentDate.getDay();
  const monthName = currentDate.toLocaleDateString("en-US", { month: "long" });

  return { year, month, date, day, monthName };
};
