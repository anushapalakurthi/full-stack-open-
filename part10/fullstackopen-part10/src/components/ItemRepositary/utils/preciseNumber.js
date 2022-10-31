function preciseNumber(number) {
  if (number < 1000) {
    return number;
  }

  return `${(number / 1000).toFixed(1)}k`;
}

export default preciseNumber;
