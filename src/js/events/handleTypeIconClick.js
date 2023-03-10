import SOURCE from "../constants/SOURCE.js";

const handleTypeIconClick = ({ target }) => {
  target.classList.toggle("income");
  target.classList.toggle("expenditure");

  if (target.classList.contains("expenditure")) {
    target.src = SOURCE.MINUS_ICON;

    return;
  }

  target.src = SOURCE.PLUS_ICON;
};

export default handleTypeIconClick;
