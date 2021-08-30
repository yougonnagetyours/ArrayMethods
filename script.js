const numbers=[1,3,5,2,6,8,9];
//let newNumbers=[];

const addNumber = (array) => {
  for (let i = 0; i<array.length ; i++) {

    array[i] += 1;
  
    //console.log(array[i]);
  }
  //return array;
}

//addNumber(numbers);

const forEachFn = (array, callback) => {

  callback(array);

  return array;
};

const mapFn = (array, callback) => {

  const newArray = [...array];

  callback(newArray);

  return newArray;
};

console.log(numbers);

console.log(forEachFn(numbers,addNumber));
console.log(mapFn(numbers,addNumber));

console.log(numbers);