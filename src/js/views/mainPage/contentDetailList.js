import { CATEGORIES } from "../../constants/CATEGORIES.js";
import { SOURCE } from "../../constants/SOURCE.js";
import { TRANSACTION_TYPE } from "../../constants/TRANSACTION_TYPE.js";

export const getContentDetailList = ({ transactionType, price, memo, payment, category, id }) => {
  return {
    tagName: "li",
    classList: ["content-detail__list"],
    dataset: { id },
    children: [
      {
        tagName: "div",
        classList: ["content-detail__category-container", category],
        children: [
          {
            tagName: "div",
            classList: ["content-detail__category"],
            text: CATEGORIES[transactionType][category],
          },
        ],
      },
      {
        tagName: "div",
        classList: ["content-detail__body"],
        text: memo,
      },
      {
        tagName: "div",
        classList: ["content-detail__payment"],
        text: payment,
      },
      {
        tagName: "div",
        classList: transactionType === TRANSACTION_TYPE.EXPENDITURE ? ["content-detail__price", "expenditure"] : ["content-detail__price", "income"],
        children: [
          {
            tagName: "span",
            classList: ["content-detail__price-text"],
            text: `${transactionType === TRANSACTION_TYPE.EXPENDITURE ? "-" : ""}${Number(price).toLocaleString("ko-KR")}원`,
          },
          {
            tagName: "div",
            classList: ["content-detail__delete-button"],
            children: [
              {
                tagName: "img",
                src: SOURCE.DELETE_ICON,
              },
              {
                tagName: "span",
                text: "삭제하기",
              },
            ],
          },
        ],
      },
    ],
  };
};
