"use strict";

// -------------------------------------------------------------------------------------------------------
//  Challenge 1:
//  Optional:
//
//  Rekey is receiving info about applicants for his startup company (as array of objects), containing first name,
//  last name, age and technology they know.
//  Rekey only cares about the full name and the technology if the applicant has more than one year of Experience
//
//  Reformat the array of objects that you are receiving by returning a new array of objects that contains only
//  fullName and tech if the applicant has more than one year of Experience

// Input:
// let cvs = [
//     {
//         firstName: "Jason",
//         lastName: "James",
//         yearsOfExperience: 20,
//         tech: "JS"
//     },
//     {
//         firstName: "Shira",
//         lastName: null,
//         yearsOfExperience: 5,
//         tech: ".Net"
//     },
//     {
//         firstName: "Dmitri",
//         lastName: "Akkerman",
//         yearsOfExperience: 1,
//         tech: "Python"
//     },
//     {
//         firstName: "Isabella",
//         lastName: null,
//         yearsOfExperience: 7,
//         tech: "Java"
//     }
// ]
//
// Output:
// [
//     {
//         fullName: "Jason James",
//         tech: "JS"
//     },
//     {
//         fullName: "Shira",
//         tech: ".Net"
//     },
//     {
//         fullName: "Isabella",
//         tech: "Java"
//     }
// ]

//  Note that:
//  1- Full name is first name + last name
//  2- If one of the names is null don`t add it to the full name

// obj.forEach((o) => console.log(o));

const cvFormatter = (arr) => {
  // write your code here
  const arrformated = [];

  // const myArray = [{ x: 100 }, { x: 200 }, { x: 300 }];

  // const myArray = [{ x: 100 }, { x: 200 }, { x: 300 }];

  // arrformated.filter((element) => element.yearsOfExperience > 1);
  // console.log(arrformated); // [{x:300}]

  return arrformated;
  // console.log(arr[0]);
  // console.log(arr[0].yearsOfExperience);
  // // arr[0].yearsOfExperience = null;
  // delete arr[0].yearsOfExperience;
  // console.log(arr[0].yearsOfExperience);
  // console.log(arr[0]);
};

// cvFormatter([
//   {
//     firstName: "Jason",
//     lastName: "James",
//     yearsOfExperience: 20,
//     tech: "JS",
//   },
//   {
//     firstName: "Shira",
//     lastName: null,
//     yearsOfExperience: 5,
//     tech: ".Net",
//   },
//   {
//     firstName: "Dmitri",
//     lastName: "Akkerman",
//     yearsOfExperience: 1,
//     tech: "Python",
//   },
//   {
//     firstName: "Isabella",
//     lastName: null,
//     yearsOfExperience: 7,
//     tech: "Java",
//   },
// ]);
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
//  Challenge 2:
//  Required:
// Write a function that takes two arrays of integers (nums and index) and
// returns a target array under the following rules:
// Initially target array is empty.
// From left to right read nums[i] and index[i], insert at index index[i] the
// value nums[i] in target array.
// Repeat the previous step until there are no elements to read in nums and index.

//Example 1
// Input: nums = [0, 1, 2, 3, 4], index = [0, 4, 1, 2, 3]
// Output: [0,4,1,2,3]

//Example 2
// Input: nums = [1, 2, 3, 4, 0], index = [0, 1, 2, 3, 0]
// Output: [1, 2, 3, 4, 1]

const targetArrayInGivenOrder = (numsArr, indexArr) => {
  let targetArr = [];
  // write your code here

  // for (let i = 0; i < numsArr.length; i++) {
  //   const num = numsArr[i];
  //   const currentIdx = indexArr[i];
  //   targetArr.splice(currentIdx, 0, num);
  // }

  // for (let i = 0; i <= numsArr.length; i++) {
  //   let index = indexArr[i];
  //   let element = numsArr[i];

  //   targetArr.splice(index, 0, element);
  // }

  return targetArr;
};

// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
//  Challenge 3:
// Required:

//  Write a function that takes an array of numbers and increase the values by 10
//
//  Input:
//  [20, 54, 89, 41]
//  Output:
//  [30, 64, 99, 51]
//

const arrInc = (arr) => {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    arr[i] += 10;
    result.push(arr[i]);
  }

  // write your code here
  return result;
};
// -------------------------------------------------------------------------------------------------------

module.exports = {
  cvFormatter,
  targetArrayInGivenOrder,
  arrInc,
};
