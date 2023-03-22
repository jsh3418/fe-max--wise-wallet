import { SOURCE } from "../../constants/SOURCE.js";

export const getContentHeader = ({ count, incomeValue, expenditureValue }) => {
  return {
    element: {
      tagName: "header",
      classList: ["content-header"],
      children: [
        {
          element: {
            tagName: "div",
            classList: ["content-header__list-count"],
            text: `전체 내역 ${count}건`,
          },
        },
        {
          element: {
            tagName: "div",
            classList: ["content-header__total-filter"],
            children: [
              {
                element: {
                  tagName: "div",
                  classList: incomeValue ? ["content-header__total-filter-inner"] : ["content-header__total-filter-inner", "display-none"],
                  children: [
                    {
                      element: {
                        tagName: "img",
                        classList: ["content-header__income-filter-checkbox", "checked"],
                        src: SOURCE.CHECK_BOX_SELECTED,
                      },
                    },
                    {
                      element: {
                        tagName: "span",
                        classList: ["content-header__total-income"],
                        text: `수입 ${incomeValue.toLocaleString()}`,
                      },
                    },
                  ],
                },
              },
              {
                element: {
                  tagName: "div",
                  classList: expenditureValue ? ["content-header__total-filter-inner"] : ["content-header__total-filter-inner", "display-none"],
                  children: [
                    {
                      element: {
                        tagName: "img",
                        classList: ["content-header__expenditure-filter-checkbox", "checked"],
                        src: SOURCE.CHECK_BOX_SELECTED,
                      },
                    },
                    {
                      element: {
                        tagName: "div",
                        classList: ["content-header__total-expenditure"],
                        text: `지출 ${expenditureValue.toLocaleString()}`,
                      },
                    },
                  ],
                },
              },
            ],
          },
        },
      ],
    },
  };
};
