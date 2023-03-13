const allowKeys = ["Backspace", "ArrowLeft", "ArrowRight"];

export const handlePriceInputKeydown = (event) => {
  if (isNaN(event.key) && !allowKeys.includes(event.key)) {
    event.preventDefault();
  }
};
