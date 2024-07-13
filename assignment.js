//#2
function bookTitles(arrOfObj) {
  let bookTitles = [];
  for (obj of arrOfObj) {
    bookTitles.push(obj.title);
  }
  return bookTitles;
}
let titles = bookTitles([
  { author: "abc", title: "book1", year: 22 },
  { author: "bca", title: "book2", year: 623 },
  { author: "cab", title: "book3", year: 1235 },
]);
console.log(titles);





//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////






//#5
function findAndModify(name) {
  let arrOfObj = [
    { name: "abc", age: 55 },
    { name: "bca", age: 5 },
    { name: "cab", age: 75 },
  ];
  for (obj of arrOfObj) {
    if (obj.name == name) {
      obj.age = 99999;
    }
  }
  return arrOfObj;
}
let findmodify = findAndModify("abc");
console.log(findmodify);






//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////







//#7
function LeapYear(year) {
  if (year % 400 == 0 || (year % 100 != 0 && year % 4 == 0))
    console.log("Happy New Year");
  else console.log("Not a Leap Year");
}
LeapYear(2000);








//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////







// #8
function uniqueValues(arr) {
  let newArr = [];
  for (element of arr) {
    if (!newArr.includes(element)) {
      newArr.push(element);
    }
  }
  return newArr;
}
let uniqeAns = uniqueValues([2, 5, 6, 3, 2, 5]);
console.log(uniqeAns);







//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////







//# 9
function maxValue(arr) {
  let max = arr[0];
  for (const element of arr) {
    if (element > max) max = element;
  }
  return max;
}
let maxvalue = maxValue([1, 2, 8, 9, 5, 7, 1, 5, 6, 2]);
console.log(maxvalue);



