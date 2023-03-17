import { initInputBarDate } from "../../init/initInputBar.js";
import { inputBarStore } from "../../store/inputBarStore.js";

export const handleDateChange = ({ target }) => {
  const inputDate = target.value;
  const isValidDate = /^(1000|1\d{3}|[2-9]\d{3})((0[1-9])|(1[0-2]))((0[1-9])|([1-2][0-9])|(3[0-1]))$/.test(inputDate);

  if (!isValidDate) {
    alert("유효한 날짜가 아닙니다.");
    initInputBarDate();

    return;
  }

  const year = Number(inputDate.slice(0, 4));
  const date = Number(inputDate.slice(6, 8));
  const month = Number(inputDate.slice(4, 6));
  const day = new Date(year, month - 1, date).getDay();

  inputBarStore.setDate({ year, date, month, day });
};
