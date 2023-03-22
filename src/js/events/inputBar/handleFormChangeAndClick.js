import { inputBarStore } from "../../store/inputBarStore.js";
import { SOURCE } from "../../constants/SOURCE.js";

export const handleFormChangeAndClick = () => {
  const $submitButton = document.querySelector(".input-bar__submit-button");

  if (inputBarStore.isAllFill()) {
    activateSubmitButton($submitButton);

    return;
  }

  deactivateSubmitButton($submitButton);
};

const activateSubmitButton = (button) => {
  button.src = SOURCE.SUBMIT_BUTTON_ACTIVE;
  button.classList.add("active");
};

const deactivateSubmitButton = (button) => {
  button.src = SOURCE.SUBMIT_BUTTON;
  button.classList.remove("active");
};
