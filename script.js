const numbers=[1,3,5,2,6,8,9];
//let newNumbers=[];

const addNumber = (array) => {
  for (let i = 0; i<array.length ; i++) {
    array[i] += 1;
  }
}

const showAbove5 = (array) => {
  let newArray = [];

  for (let i = 0; i<array.length; i++){
    if (array[i] >= 5){
      newArray = [...newArray, array[i]]
    }
  }
}

//For Each
const forEachFn = (array, callback) => {

  callback(array);

  return array;
};

//MAP
const mapFn = (array, callback) => {

  const newArray = [...array];

  callback(newArray);

  return newArray;
};

//FILTER
const filterFn = (array, callback) => {
  callback(array);
};

//OUTPUT

//console.log(numbers);
//console.log(forEachFn(numbers,addNumber));
//console.log(mapFn(numbers,addNumber));
console.log(filterFn(numbers,showAbove5));
//console.log(numbers);