import { getCurrentDate } from "../utils/getCurrentDate.js";

export const displayDateStore = {
  year: null,
  month: null,
  monthName: null,

  initStore() {
    const { year, month } = getCurrentDate();

    this.year = year;
    this.month = month;
    this.monthName = this.getMonthName();
  },

  getMonthName() {
    return new Date(this.year, this.month - 1).toLocaleDateString("en-US", { month: "long" });
  },

  moveToPrevMonth() {
    this.month -= 1;

    if (this.month < 1) {
      this.year -= 1;
      this.month = 12;
    }

    this.monthName = this.getMonthName();
  },

  moveToNextMonth() {
    this.month += 1;

    if (this.month > 12) {
      this.year += 1;
      this.month = 1;
    }

    this.monthName = this.getMonthName();
  },
};
