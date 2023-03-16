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
                  tagName: "img",
                  src: SOURCE.CHECK_BOX_DEFAULT,
                },
              },
              {
                element: {
                  tagName: "span",
                  classList: ["content-header__total-income"],
                  text: `수입 ${incomeValue.toLocaleString()}`,
                },
              },
              {
                element: {
                  tagName: "img",
                  src: SOURCE.CHECK_BOX_DEFAULT,
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
  };
};
