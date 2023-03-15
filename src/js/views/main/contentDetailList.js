import { CATEGORIES } from "../../constants/CATEGORIES.js";
import { TRANSACTION_TYPE } from "../../constants/TRANSACTION_TYPE.js";

export const getContentDetailListElement = ({ transactionType, price, memo, payment, category }) => {
  return {
    element: {
      tagName: "li",
      classList: ["content-detail__list"],
      children: [
        {
          element: {
            tagName: "div",
            classList: ["content-detail__category-container", category],
            children: [
              {
                element: {
                  tagName: "div",
                  classList: ["content-detail__category"],
                  text: CATEGORIES[transactionType][category],
                },
              },
            ],
          },
        },
        {
          element: {
            tagName: "div",
            classList: ["content-detail__body"],
            text: memo,
          },
        },
        {
          element: {
            tagName: "div",
            classList: ["content-detail__payment"],
            text: payment,
          },
        },
        {
          element: {
            tagName: "div",
            classList: ["content-detail__price", "expenditure"],
            children: [
              {
                element: {
                  tagName: "span",
                  classList: ["content-detail__price-text"],
                  text: `${transactionType === TRANSACTION_TYPE.EXPENDITURE ? "-" : ""}${Number(price).toLocaleString("ko-KR")}원`,
                },
              },
              {
                element: {
                  tagName: "div",
                  classList: ["content-detail__delete-button"],
                  children: [
                    {
                      element: {
                        tagName: "img",
                        src: "/src/assets/delete-icon.svg",
                      },
                    },
                    {
                      element: {
                        tagName: "span",
                        text: "삭제하기",
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
