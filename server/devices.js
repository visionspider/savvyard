const fan = (tempChange) => {
  const convert_positive = (num) => {
    if (num < 0) num = num * -1;
    return num;
  };
  const convert_negative = (num) => {
    if (num > 0) num = num * -1;
    return num;
  };
  if (deviceType.toLowerCase().includes("heat")) {
    return convert_positive(tempChange) * 2;
  } else if (deviceType.toLowerCase().includes("cool")) {
    return convert_negative(tempChange) * 2;
  }
};

module.exports = { fan };
