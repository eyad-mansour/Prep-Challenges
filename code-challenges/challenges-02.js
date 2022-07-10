"use strict";
// -------------------------------------------------------------------------------------------------------
//  Challenge 01:
//  optional:
//  Write a function that takes an array and returns the array reversed
//  without using built-in functions
// Input: ['C#', 'JS', 'Ruby','Python']
// Output: ['Python','Ruby','JS','C#']

const reverseArray = (arr) => {
  // write your code here
  const reversedArray = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversedArray.push(arr[i]);
    // [2,3,5].
    // arr[]
  }
  return reversedArray;
};

// -------------------------------------------------------------------------------------------------------
// Challenge 02:
// Given the array consisting of 2n elements. Write a function that takes the
// array in the form [x1,x2,...,xn,y1,y2,...,yn] and return the array
// in in the form [x1,y1,x2,y2,...,xn,yn].
// Example 1:
// Input: nums = [2,5,1,3,4,7], n = 3
// Output: [2,3,5,4,1,7]
// Explanation: Since x1=2, x2=5, x3=1, y1=3, y2=4, y3=7 then the answer is [2,3,5,4,1,7].

const shuffleArray = (arr) => {
  // write your code here
  const shuffledArray = [];
  const n = arr.length / 2;
  for (let i = 0; i < n; i++) {
    shuffledArray.push(arr[i]);
    shuffledArray.push(arr[i + n]);

    // [2,5,1,3,4,7]
    // arr[++++++  2 ++++++ 3]
  }
  return shuffledArray;
};

// -------------------------------------------------------------------------------------------------------
// Challenge 03:
// You are given a string s and an integer array indices of the same length.
// The string s will be shuffled such that the character at the ith position
// moves to indices[i] in the shuffled string.
// Input: s = "codeleet", indices = [4,5,6,7,0,2,1,3]
// Output: "leetcode"
// Explanation: As shown, "codeleet" becomes "leetcode" after shuffling.

const shuffleString = (str, indicesArr) => {
  // write your code here
  // console.log(indicesArr.length);
  const shuffledString = new Array(indicesArr.length);
  for (let i = 0; i < indicesArr.length; i++) {
    shuffledString[indicesArr[i]] = str[i];
    console.log(shuffledString);

    // indi[4, 5, 6, 7, 0, 2, 1, 3];
    // shuff[null, null, null, null, null, null, null, null];
    // i = 0 indecise of [i] = 4;
    // shuffeld[inde[i]] =
    //
    // s = "codeleet"
    //
  }
  // shuffledString = shuffledString.join("");
  return shuffledString.join("");
};
// shuffleString("codeleet", [4, 5, 6, 7, 0, 2, 1, 3]);
// -------------------------------------------------------------------------------------------------------

module.exports = { reverseArray, shuffleArray, shuffleString };
