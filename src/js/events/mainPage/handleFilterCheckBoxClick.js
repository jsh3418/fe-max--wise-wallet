import { SOURCE } from "../../constants/SOURCE.js";
import { renderFilteredContentList } from "../../init/initMainPage.js";

export const handleFilterCheckBoxClick = ({ target }) => {
  const isIncomeFilterCheckboxClick = target.classList.contains("content-header__income-filter-checkbox");
  const isExpenditureFilterCheckboxClick = target.classList.contains("content-header__expenditure-filter-checkbox");

  if (!isIncomeFilterCheckboxClick && !isExpenditureFilterCheckboxClick) {
    return;
  }

  toggleClassList(target);
  toggleCheckBoxImg(target);

  renderFilteredContentList();
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
