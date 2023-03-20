import { SOURCE } from "../../constants/SOURCE.js";

export const handleFilterCheckBoxClick = ({ target }) => {
  const isIncomeFilterCheckboxClick = target.classList.contains("content-header__income-filter-checkbox");
  const isExpenditureFilterCheckboxClick = target.classList.contains("content-header__expenditure-filter-checkbox");

  if (!isIncomeFilterCheckboxClick && !isExpenditureFilterCheckboxClick) return;

  if (isIncomeFilterCheckboxClick) {
    toggleClassList(target);
    toggleCheckBoxImg(target);
  }

  if (isExpenditureFilterCheckboxClick) {
    toggleClassList(target);
    toggleCheckBoxImg(target);
  }
};

const toggleClassList = (target) => {
  target.classList.toggle("checked");
};

const toggleCheckBoxImg = (target) => {
  if (target.classList.contains("checked")) {
    target.src = SOURCE.CHECK_BOX_SELECTED;

    return;
  }

  target.src = SOURCE.CHECK_BOX_DEFAULT;
};
