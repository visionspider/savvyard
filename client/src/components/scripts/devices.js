const fan = (tempChange, type) => {
  const convert_positive = (num) => {
    if (num < 0) num = num * -1;
    return num;
  };
  const convert_negative = (num) => {
    if (num > 0) num = num * -1;
    return num;
  };
  if (type.toLowerCase().includes("heat")) {
    // console.log("HEATING = ", convert_positive(tempChange) * 2);
    return convert_positive(tempChange) * 2;
  } else if (type.toLowerCase().includes("cool")) {
    // console.log("COOLING = ", convert_negative(tempChange) * 2);

    return convert_negative(tempChange) * 2;
  }
};

module.exports = { fan };
