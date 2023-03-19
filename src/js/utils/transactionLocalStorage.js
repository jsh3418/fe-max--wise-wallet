export const setTransactionLocalStorage = (data) => {
  localStorage.setItem("transaction-items", JSON.stringify(data));
};

export const getTransactionLocalStorage = () => {
  return JSON.parse(localStorage.getItem("transaction-items"));
};
