import { initInputBarDate } from "../../init/initInputBar.js";
import { inputBarStore } from "../../store/inputBarStore.js";

export const handleDateChange = ({ target }) => {
  try {
    const date = parseDate(target.value);

    inputBarStore.setDate(date);
  } catch (error) {
    alert(error.message);
    initInputBarDate();
  }
};

const parseDate = (inputDate) => {
  if (typeof inputDate !== "string") throw new Error("input 값이 문자열이 아닙니다.");
  if (inputDate.length !== 8) throw new Error("날짜를 연월일 순으로 8자를 맞춰 입력해주세요. ex) 20230101");

  const year = Number(inputDate.slice(0, 4));
  const month = Number(inputDate.slice(4, 6));
  const date = Number(inputDate.slice(6, 8));

  if (1 > month || month > 12) throw new Error("1월부터 12월까지만 입력해주세요.");
  if (1 > date || date > 31) throw new Error("1일부터 31일까지만 입력해주세요.");

  return new Date(year, month - 1, date);
};
