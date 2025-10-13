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