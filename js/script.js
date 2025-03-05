// 1
let array = [14, 150, "css", null, "javascript", 25];

let newArray = array.map((item) => {
  // if (typeof item === 'number') {
  //     return Math.pow(item, 2);
  // } else if (typeof item === 'string') {
  //     return item.toUpperCase();
  // }
  let newItem =
    typeof item === "number"
      ? Math.pow(item, 2)
      : typeof item === "string"
      ? item.toUpperCase()
      : item;
  return newItem;
});

console.log(newArray);

// 2
let userAnswer = prompt("What is the capital of Georgia??");

let correctAnswer = "tbilisi";

if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
  console.log("Yay, you're right! The capital of Georgia is Tbilisi!");
} else {
  console.log("are u really Georgian?");
}

// 3
let array1 = ["hello1", 14, 24, "hello2"];

let newArr1 = array1.filter((item) => typeof item === "number");

console.log(newArr1);

// 4
let languages = ["html", "css", "javascript", "python", "php"];

let filteredLanguages = languages.filter((language) => language.length > 3);

console.log(filteredLanguages);

// 5
let words = ["Madrid", "rome", "Milan", "berlin"];

let filteredWords = words.filter(
  (word) => word.includes("m") || word.includes("M")
);

console.log(filteredWords);

// 6
let link = "https://google.com";

function checkHttps() {
  // if (link.includes("https://")) {
  //   console.log("yes, it includes");
  // } else {
  //   console.log("no, it does not include");
  // }
  let checking = link.includes("https://")
    ? "yes, it includes"
    : "no, it does not include";

  return checking;
}

let checkUrl = checkHttps(link);
console.log(checkUrl);

// 7
let array6 = [-1, -2, -3, 4];
let positiveNum = array6.some((num) => num > 0);
console.log(positiveNum);

// 8

let str = "12345";

let array2 = str.split("").reduce(function (accumulator, currentValue) {
  return accumulator + Number(currentValue);
}, 0);

console.log(array2);

// 9

let array3 = [
  [1, 6],
  [4, 9],
  [7, 3],
].reduce(function (accumulator, currentValue) {
  return accumulator.concat(currentValue);
}, []);
let totalSum = array3.reduce(function (accumulator, currentValue) {
  return accumulator + currentValue;
}, 0);
console.log(array3);
console.log(totalSum);

// 10
let arr1 = [1, 2];
let arr2 = [3, 4];
let arr3 = [5, 6];

let array4 = arr1.concat(arr2, arr3);

console.log(array4);

// 11

let array5 = [1, 2, 3, 4, 5];

array5.splice(array5.length - 2, 1, "strawberry");

console.log(array5);

// 12
let info = "good day";
let neWord = info.slice(5, 8);
console.log(neWord);

// 13

function stringLength(str) {
  return str.length;
}

let string = "hello world";
let length = stringLength(string);

console.log(length);

let sentence = "i am so hungry";
let newLength = stringLength(sentence);

console.log(newLength);
//
let getStringLength = (str) => str.length;

let myString = "hello world";
console.log(getStringLength(myString));

// 14

let array7 = [5, 25, 89, 120, 36];

array7.push("javascript", "python");
array7.unshift("html", "css");
array7.shift();
array7.pop();
console.log(array7);
console.log(array7.length);

// 15
let fruits = ["orange", "banana", "kiwi"];

console.log(fruits.length);
fruits.push("apple", "pineapple");
fruits.unshift("watermelon");
console.log(fruits.length);
fruits.splice(2, 0, "mango");
fruits.shift();
fruits.pop();
console.log(fruits);
console.log(fruits.length);

// 16
let numArr = [1, 2, 3, 4];

let newNumArr = numArr.splice(3, 0, "a", "b", "c");
console.log(newNumArr);

// 17
let arr5 = [15, 100, 25, 10, 36];
arr5.splice(3, 1);

console.log(arr5);
//
let arr6 = [15, 100, 25, 10, 36];
let newArr6 = arr6.filter((item) => item !== 10);

console.log(newArr6);

// 18
let array8 = [1, 2, 3, 4, 5];
array8.splice(2, 1, "three");

console.log(array8);

// 19
let array9 = [14, 150, "css", null, "javascript", 25];
let newArray9 = array9.map((item) =>
  typeof item === "number"
    ? Math.pow(item, 2)
    : typeof item === "string"
    ? item.toUpperCase()
    : item
);
console.log(newArray9);

// 20
let arr7 = [12, 25, 3, 6, 8, 14, 7, 23];
let newArr7 = arr7.map((item) => item / 3);

console.log(newArr7);

// 21

let fruitsArr = ["apple", "orange", "mango", "kiwi"];
fruitsArr.splice(2, 0, "strawberry", "avocado");

console.log(fruitsArr);

// 22
let numbers = [12, 56, 18, 35, 10];
let evenNumbers = numbers.filter((item) => item % 2 === 0);

console.log(evenNumbers);

// 23
let numList = [1, 2, 3, 4, 5];
let newNumList = numList.reduce(function (accumulator, currentValue) {
  return accumulator * currentValue;
}, 1);

console.log(newNumList);

// 24

let list = [5, 4, 3, 2, 1];
let newList = list.map((num) => num * num);

console.log(newList)