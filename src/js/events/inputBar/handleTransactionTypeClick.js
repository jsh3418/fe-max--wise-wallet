import { SOURCE } from "../../constants/SOURCE.js";
import { inputBarStore } from "../../store/inputBarStore.js";

export const handleTransactionTypeClick = ({ target }) => {
  inputBarStore.toggleTransactionType();

  if (inputBarStore.isTransactionExpenditure()) {
    target.src = SOURCE.PLUS_ICON;

    return;
  }

  target.src = SOURCE.MINUS_ICON;
};
