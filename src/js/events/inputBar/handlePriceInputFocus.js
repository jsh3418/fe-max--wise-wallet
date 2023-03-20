import { inputBarStore } from "../../store/inputBarStore.js";

export const handlePriceInputFocus = ({ currentTarget }) => {
  const price = inputBarStore.getPrice();

  setPriceInput(currentTarget, price);
};

const setPriceInput = (currentTarget, price) => {
  currentTarget.value = price;
};
