const onlyEven = (payload) => payload.filter((num) => num % 2 === 0);

const squaresNumbers = (payload) => payload.map((num) => num * num);

const onlyName = (payload) => payload.filter((obj) => obj.name);

const sumNum = (payload) => payload.reduce((sum, num) => sum + num, 0);

const applyFunc = (func, arr) => arr.map(func);

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const objects = [
  { name: "Артем", age: 25 },
  { name: "Имя" },
  { name: "Имя2", age: 30 },
  { name: "Имя2", age: 10 },
];
const threshold = 20;

const evenNumbers = onlyEven(numbers);
const squaredEvenNumbers = squaresNumbers(evenNumbers);
const sumOfSquares = sumNum(squaredEvenNumbers);

const filterAgesAboveThreshold = (arr, threshold) =>
  arr.filter((obj) => obj.age > threshold).map((obj) => obj.age);
const filteredAges = filterAgesAboveThreshold(objects, threshold);
const averageAge =
  filteredAges.length > 0 ? sumNum(filteredAges) / filteredAges.length : 0;

console.log("Сумма квадратов чётных чисел:", sumOfSquares);
console.log("Среднее арифметическое возрастов:", averageAge);
