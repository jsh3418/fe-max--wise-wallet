export const getContentInfo = ({ month, date, day, incomeValue, expenditureValue }) => {
  return {
    element: {
      tagName: "div",
      classList: ["content-info"],
      children: [
        {
          element: {
            tagName: "div",
            children: [
              {
                element: {
                  tagName: "span",
                  classList: ["content-info__date"],
                  text: `${month}월 ${date}일`,
                },
              },
              {
                element: {
                  tagName: "span",
                  classList: ["content-info__day"],
                  text: day,
                },
              },
            ],
          },
        },
        {
          element: {
            tagName: "div",
            classList: ["content-info__income-expenditure"],
            children: [
              {
                element: {
                  tagName: "div",
                  classList: incomeValue ? ["content-info__income"] : ["content-info__income", "display-none"],
                  children: [
                    {
                      element: {
                        tagName: "span",
                        classList: ["content-info__income-text"],
                        text: "수입",
                      },
                    },
                    {
                      element: {
                        tagName: "span",
                        classList: ["content-info__income-value"],
                        text: `${incomeValue.toLocaleString()}원`,
                      },
                    },
                  ],
                },
              },
              {
                element: {
                  tagName: "div",
                  classList: expenditureValue ? ["content-info__expenditure"] : ["content-info__expenditure", "display-none"],
                  children: [
                    {
                      element: {
                        tagName: "span",
                        classList: ["content-info__expenditure-text"],
                        text: "지출",
                      },
                    },
                    {
                      element: {
                        tagName: "span",
                        classList: ["content-info__expenditure-value"],
                        text: `${expenditureValue.toLocaleString()}원`,
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
