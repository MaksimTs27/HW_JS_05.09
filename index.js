//Функции, function expression и function declaration
//Task 1

function greet(name) {
  console.log('Привет, ' + name + '!');
}
greet('Makism');

//task 2

const multiply = function (a, b) {
  return a * b;
};
console.log(multiply(7, 9));

//task 3

function isEven(number) {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

//Стрелочные функции
//task 1

const add = (a, b) => a + b;

//task 2

const square = (m) => m * m;

//task 3

const sayHello = (name) => {
  return 'Привет, ' + name + '!';
};
console.log(sayHello('Maksim'));

//Рекурсия
//task 1

function factorial(n) {
  if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}
console.log(factorial(5));

//task 2

function fibonacci(n) {
  if (n <= 1) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}
console.log(fibonacci(6));

//task 3

function sum(n) {
  let summary = 0;
  for (let i = 0; i <= n; i++) {
    summary += i;
  }
  return summary;
}
console.log(sum(10));

//Область видимости функции, замыкание
//task 1

function createCounter() {
  let num = 0;
  return function () {
    num++;
    return num;
  };
}
const newCreateCounter = createCounter();
console.log(newCreateCounter());
console.log(newCreateCounter());
console.log(newCreateCounter());

//task 2
function createSecret() {
  let innerSecret = 'New password';

  function innerProtect() {
    console.log(innerSecret);
  }
  return innerProtect;
}
let variable = createSecret();

console.log(variable());

//task 3

function createCounterWithInitial(num) {
  let bod = num;
  return function () {
    return bod++;
  };
}

let counterVersion = createCounterWithInitial(78);

console.log(counterVersion());
console.log(counterVersion());
console.log(counterVersion());
console.log(counterVersion());
