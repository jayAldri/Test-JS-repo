const num = [10, 20, 30];
num.push(99);
console.log(num); // [10, 20, 30, 99]

function getLastValue(array) {
  return array[array.length - 1];

}
console.log(getLastValue([1,20, 22, 24, 5])); // 5
console.log(getLastValue(['hi', 'babi', 'have a nice day'])); // day

function arraySwap(array){
  const temp = array[0];
  array[0] = array[array.length - 1];
  array[array.length - 1] = temp;
  return array;
}
console.log(arraySwap([1,2,3,4])); // [4,2,3,1]
console.log(arraySwap(['hi', 'babi', 'have a nice day'])); // ['have a nice day', 'babi', 'hi']


//create a for loop that counts up from 0 to 10, but counts up by 2
for(let i = 0; i <= 10; i += 2){
  console.log(i);
}

// 11i. Create a function addNum(array, num) that takes an array of number and returns an array where each nimber is increased by 'num'
function addNum(array, num){
  const newArray = [];
  for(let i = 0; i < array.length; i++){
    newArray.push(array[i] + num);
  }
  return newArray;
}
console.log(addNum([1,2,3], 2)); // [3,4,5]
console.log(addNum([1,2,3], 3)); // [4,5,6]
console.log(addNum([-1,-2,0, 99], 2)); // [1,0,2,101]



//Create a function addArrays(array1, array2) that takes 2 arrays of numbers and adds each number in the arrays together.
function addArray(array1, array2){
  const newArray = [];

  for(let i = 0; i < array1.length; i++){
    newArray.push(array1[i] + array2[i]);
  }
  return newArray;
}
console.log(addArray([1,1,2], [1,1,3])); // [2,2,5]
console.log(addArray([1,2,3], [4,5,6])); // [5,7,9]

//11k. Create a function countPositive(nums) that takes an array of numbers and return how many numbers in the arrays aaare greater than 0.

// function countPositive(nums) {
//   let count = 0;
//   for(let i = 0; i < nums.length; i++){
//     if(nums[i] > 0){
//       count++;
//     }
//   }
//   return count;
// }
// console.log(countPositive([1, -3, 5])); // 2
// console.log(countPositive([-2, 3, -5, 7, 10])); // 3


//11l. Create a function minMax(nums) that takes an array of numbers and return boject with the minimum and maximum numbers in the array(do this using a loop instead of using something like Math.min)

function minMax(nums) {
  let min = nums[0];

  let max = nums[0];
  for(let i = 1; i < nums.length; i++){
    if(nums[i] < min){
      min = nums[i];
    }
    if(nums[i] > max){
      max = nums[i];
    }
  }
  return {min, max};
}
console.log(minMax([1, -3, 5])); // {min: -3, max: 5}
console.log(minMax([-2, 3, -5, 7, 10])); // {min: -5, max: 10}
