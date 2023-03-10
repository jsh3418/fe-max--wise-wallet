const handlePriceInputKeyup = ({ target }) => {
  const targetValue = Number(target.value.split(",").join(""));

  if (isNaN(targetValue) || targetValue === 0) {
    target.value = "";

    return;
  }

  target.value = targetValue.toLocaleString("ko-KR");
};

export default handlePriceInputKeyup;
