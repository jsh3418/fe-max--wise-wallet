import { inputBarStore } from "../../store/inputBarStore.js";
import { getTransactionLocalStorage, setTransactionLocalStorage } from "../../utils/transactionLocalStorage.js";
import { initInputBar } from "../../init/initInputBar.js";

export const handleSubmitButtonClick = () => {
  appendTransactionLocalStorage();
  inputBarStore.initStore();
  initInputBar();
};

const appendTransactionLocalStorage = () => {
  const localStorageData = getTransactionLocalStorage();
  const data = inputBarStore.getAllProperty();

  if (localStorageData == null) {
    setTransactionLocalStorage([data]);

    return;
  }

  setTransactionLocalStorage([data, ...localStorageData]);
};
