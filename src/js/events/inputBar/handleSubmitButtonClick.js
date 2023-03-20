import { inputBarStore } from "../../store/inputBarStore.js";
import { getTransactionLocalStorage, setTransactionLocalStorage } from "../../utils/transactionLocalStorage.js";
import { initInputBar } from "../../init/initInputBar.js";

export const handleSubmitButtonClick = () => {
  if (!inputBarStore.isAllFill()) return;

  appendDataToLocalStorage();
  inputBarStore.initStore();
  initInputBar();
};

const appendDataToLocalStorage = () => {
  const localStorageData = getTransactionLocalStorage();
  const data = inputBarStore.getAllProperty();

  if (localStorageData == null) {
    setTransactionLocalStorage([data]);

    return;
  }

  setTransactionLocalStorage([data, ...localStorageData]);
};
