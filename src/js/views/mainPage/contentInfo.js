export const getContentInfo = ({ month, date, day, incomeValue, expenditureValue }) => {
  return {
    tagName: "div",
    classList: ["content-info"],
    children: [
      {
        tagName: "div",
        children: [
          {
            tagName: "span",
            classList: ["content-info__date"],
            text: `${month}월 ${date}일`,
          },
          {
            tagName: "span",
            classList: ["content-info__day"],
            text: day,
          },
        ],
      },

      {
        tagName: "div",
        classList: ["content-info__income-expenditure"],
        children: [
          {
            tagName: "div",
            classList: incomeValue ? ["content-info__income"] : ["content-info__income", "display-none"],
            children: [
              {
                tagName: "span",
                classList: ["content-info__income-text"],
                text: "수입",
              },

              {
                tagName: "span",
                classList: ["content-info__income-value"],
                text: `${incomeValue.toLocaleString()}원`,
              },
            ],
          },
          {
            tagName: "div",
            classList: expenditureValue ? ["content-info__expenditure"] : ["content-info__expenditure", "display-none"],
            children: [
              {
                tagName: "span",
                classList: ["content-info__expenditure-text"],
                text: "지출",
              },
              {
                tagName: "span",
                classList: ["content-info__expenditure-value"],
                text: `${expenditureValue.toLocaleString()}원`,
              },
            ],
          },
        ],
      },
    ],
  };
};
