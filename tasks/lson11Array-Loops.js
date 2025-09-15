/*
const nums = [10, 20, 30]
nums[2] = 99;
console.log(nums);

function getLastValue(array) {
  const lastIndex = array.length - 1;
  return array[lastIndex];

}
console.log(getLastValue([1, 20, 22, 24, 5]));
console.log(getLastValue(['hi', 'hello', 'Good']));

function arraySwap(array) {
  const lastIndex = array.length - 1;

  /*
  const lastValue = array[lastIndex];
  const firstValue = array[0];

  array[0] = lastValue;
  array[lastIndex] = firstValue;

  return array;
  
  for (let swap = 0; swap < array.length; swap ++) {
    if (swap === 0) {
      let temp = array[swap];
      array[swap] = array[lastIndex];
      array[lastIndex] = temp;

      break
    }
  }
  return array;
}
*/

// console.log(arraySwap([1, 20, 22, 24, 5]));
// console.log(arraySwap(['hi', 'hello', 'Good']));


//Create a for loop that counts up from 0 to 10, but counts up by 2
for (let i = 0; i <= 10; i += 2) {
  console.log(i);
}

//Create a for loop that counts down from 5 to 0
for (let count = 5; count >= 0; count--){
  console.log(count);
}

//Create a loop that takes an array of numbers and create a new array where each number is increased by 1.
function increaseByOne (array1, num){
  let newArray = [];

  for (let aray = 0; aray < array1.length; aray++) {
    newArray.push(array1[aray] + num);
  }
  return newArray;
}

console.log(increaseByOne([1, 2, 3], 2));
console.log(increaseByOne([1, 2, 3], 3));
console.log(increaseByOne([-2, -1, 0, 99], 2));


