import { inputBarStore } from "../../store/inputBarStore.js";

export const handleMemoKeyup = ({ target }) => {
  const memo = target.value;

  inputBarStore.setMemo(memo);
};
