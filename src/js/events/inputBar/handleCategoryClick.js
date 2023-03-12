import { handleDropdown } from "../../utils/handleDropdown.js";

export const handleCategoryClick = () => {
  const $category = document.querySelector("#input-bar__category");
  const $categoryDropdown = document.querySelector(".category-dropdown");

  handleDropdown($category, $categoryDropdown);
};
