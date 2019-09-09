class Complex {
  constructor(re, im) {
    this.re = re || 0;
    this.im = im || 0;
  }
}

function view(re, im) {
  if (im === 0) {
    return `${re}`;
  }
  if (im === 1) {
    return `${re}+i`;
  }
  if (re === 0) {
    return `${im}i`;
  }
  if (im === -1) {
    return `${re}i`;
  }
  if (im < 0) {
    return `${re}${im}i`;
  } else {
    return `${re}+${im}i`;
  }
}

function complexSum(num1, num2) {
  let real = num1.re + num2.re;
  let image = num1.im + num2.im;
  return view(real, image);
}

function complexSubtraction(num1, num2) {
  let real = num1.re - num2.re;
  let image = num1.im - num2.im;
  return view(real, image);
}

function complexMultiply(num1, num2) {
  let real = num1.re * num2.re - num1.im * num2.im;
  let image = num1.re * num2.im + num1.im * num2.re;
  return view(real, image);
}

function complexDivide(num1, num2) {
  let real =
    (num1.re * num2.re + num1.im * num2.im) / (num2.re ** 2 + num2.im ** 2);
  let image =
    (num1.im * num2.re - num1.re * num2.im) / (num2.re ** 2 + num2.im ** 2);
  return view(real, image);
}

module.exports = {
  Complex,
  complexSum,
  complexSubtraction,
  complexMultiply,
  complexDivide
};
