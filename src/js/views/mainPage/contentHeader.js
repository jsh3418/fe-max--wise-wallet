import { SOURCE } from "../../constants/SOURCE.js";

export const getContentHeader = ({ count, incomeValue, expenditureValue }) => {
  return {
    tagName: "header",
    classList: ["content-header"],
    children: [
      {
        tagName: "div",
        classList: ["content-header__list-count"],
        text: `전체 내역 ${count}건`,
      },
      {
        tagName: "div",
        classList: ["content-header__total-filter"],
        children: [
          {
            tagName: "div",
            classList: incomeValue ? ["content-header__total-filter-inner"] : ["content-header__total-filter-inner", "display-none"],
            children: [
              {
                tagName: "img",
                classList: ["content-header__income-filter-checkbox", "checked"],
                src: SOURCE.CHECK_BOX_SELECTED,
              },
              {
                tagName: "span",
                classList: ["content-header__total-income"],
                text: `수입 ${incomeValue.toLocaleString()}`,
              },
            ],
          },
          {
            tagName: "div",
            classList: expenditureValue ? ["content-header__total-filter-inner"] : ["content-header__total-filter-inner", "display-none"],
            children: [
              {
                tagName: "img",
                classList: ["content-header__expenditure-filter-checkbox", "checked"],
                src: SOURCE.CHECK_BOX_SELECTED,
              },
              {
                tagName: "div",
                classList: ["content-header__total-expenditure"],
                text: `지출 ${expenditureValue.toLocaleString()}`,
              },
            ],
          },
        ],
      },
    ],
  };
};
