
// leap year checking function, if leap year then prints happy new year
function LeapYear(year) {
    if (year % 400 == 0 || (year % 100 != 0 && year % 4 == 0))
      console.log("Happy New Year");
    else console.log("Not a Leap Year");
  }
  
  function maxValue(arr) {
    let max = arr[0];
    for (const element of arr) {
      if (element > max) max = element;
    }
    return max;
  }
  
  function uniqueValues(arr) {
    let newArr = [];
    for (element of arr) {
      if (!newArr.includes(element)) {
        newArr.push(element);
      }
    }
    return newArr;
  }
  
  // let c = uniqueValues([2, 5, 6, 3, 2, 5]);
  // console.log(c);
  
  function findAndModify(name) {
    let arrOfObj = [
      { name: "abc", age: 55 },
      { name: "bca", age: 5 },
      { name: "cab", age: 75 },
    ];
    for (obj of arrOfObj) {
      console.log(obj.name);
      if (obj.name == name) {
        obj.age = 9999;
      }
    }
    console.log(arrOfObj);
  }
  // findAndModify("abc");
  
  function bookTitles(arrOfObj) {
    let bookTitles = [];
    for (obj of arrOfObj) {
      bookTitles.push(obj.title);
    }
    return bookTitles;
  }
  
  console.log(
    bookTitles([
      { name: "abc", title: 55 },
      { name: "bca", title: 5 },
      { name: "cab", title: 75 },
    ])
  );
  

