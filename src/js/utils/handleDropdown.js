import { showElement } from "./showElement.js";
import { hideElement } from "./hideElement.js";

export const handleDropdown = (dropdownButton, dropdownMenu) => {
  showElement(dropdownMenu);

  const handleDropdownOutsideClick = ({ target }) => {
    if (!dropdownButton.contains(target) && !dropdownMenu.contains(target)) {
      hideElement(dropdownMenu);
      document.removeEventListener("click", handleDropdownOutsideClick);
    }
  };

  document.addEventListener("click", handleDropdownOutsideClick);
};
