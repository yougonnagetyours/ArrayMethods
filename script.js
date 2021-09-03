const filterFn = (array, callback) => {
  if (!Array.isArray(array)) throw new Error('pierwszy argument musi byc tablicą !');
  if (typeof callback != 'function') throw new Error('drugi argument musi byc funkcją');

  const newArray = [...array];
  const result = [];

  for (const index in newArray){
    const id = parseInt(index);
    if (callback(newArray[id], id)){
      result.push(newArray[id]);
      }
    
  }

  return result;
};






//Wywoływanie
cars = ['audi','nissan','bmw','volvo','toyota'];

const carsFilter = filterFn(cars, (car) => (
  //if (car === "nissan") return true;
  car.length > 3))

console.log(carsFilter);
