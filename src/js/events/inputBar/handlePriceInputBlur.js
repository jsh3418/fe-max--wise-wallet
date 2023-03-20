import { inputBarStore } from "../../store/inputBarStore.js";

export const handlePriceInputBlur = ({ target }) => {
  const inputPrice = target.value;

  try {
    const price = parsePrice(inputPrice);

    inputBarStore.setPrice(price);
    renderFormatPrice(price, target);
  } catch (error) {
    alert(error.message);
    target.value = "";
  }
};

const parsePrice = (inputPrice) => {
  const price = Number(inputPrice);

  if (isNaN(price)) throw new Error("금액 입력 값에 숫자 외 다른 값이 들어왔습니다.");

  return price;
};

const renderFormatPrice = (price, target) => {
  target.value = price.toLocaleString("ko-KR");
};
