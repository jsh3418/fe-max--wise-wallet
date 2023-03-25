import { inputBarStore } from "../../store/inputBarStore.js";
import { getTransactionLocalStorage, setTransactionLocalStorage } from "../../utils/transactionLocalStorage.js";
import { initInputBar } from "../../init/initInputBar.js";
import { initMainPage } from "../../init/initMainPage.js";

export const handleSubmitButtonClick = () => {
  if (!inputBarStore.isAllFill()) {
    return;
  }

  appendDataToLocalStorage();
  inputBarStore.initStore();
  initInputBar();
  initMainPage();
};

const appendDataToLocalStorage = () => {
  const localStorageData = getTransactionLocalStorage();
  const data = inputBarStore.getAllProperty();

  if (localStorageData == null) {
    setTransactionLocalStorage([data]);

    return;
  }

  setTransactionLocalStorage([data, ...localStorageData.filter(({ id }) => id !== inputBarStore.getId())]);
};
