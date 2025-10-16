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

function addArray(array1, array2){
  const newArray = [];

  for(let i = 0; i < array1.length; i++){
    newArray.push(array1[i] + array2[i]);
  }
  return newArray;
}
console.log(addArray([1,1,2], [1,1,3])); // [2,2,5]
console.log(addArray([1,2,3], [4,5,6])); // [5,7,9]