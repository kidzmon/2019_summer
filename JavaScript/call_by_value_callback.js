function cal(func, num) {
  return func(num);
}

function increase(num) {
  return num + 1;
}

function decrease(num) {
  return num - 1;
}
alert(cal(increase, 1));
alert(cal(decrease, 1));

function cal(mode) {
  var funcs = {
    'plus': function (left, right) {
      return left + right
    },
    'minus': function (left, right) {
      return left - right
    }
  }
  return funcs[mode];
}
alert(cal('plus')(2, 1));
alert(cal('minus')(2, 1));

var process = [
  function (input) {
    return input + 10;
  },
  function (input) {
    return input * input;
  },
  function (input) {
    return input / 2;
  }
];
var input = 1;
for (var i = 0; i < process.length; i++) {
  input = process[i](input);
}
alert(input);

function sortNumber(a, b) {
  return b - a;
}
var numbers = [20, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
alert(numbers.sort(sortNumber));