function mapFn(array, callback) {
  if (!Array.isArray(array)) throw new Error("First argument must be an array");
  if (typeof callback !== "function") throw new Error("Second argument must be a function");

  const result = [];
  const arrayCopy = [...array];

  for (const index in arrayCopy) {
    const id = parseInt(index);
    const value = callback(arrayCopy[id], id, arrayCopy);
    result.push(value);
  }
  return result;
}

const names = ["andrzej","jan","michał"];

const newNames = mapFn(names, (name) =>{
  name += "ek";
  return name;
})

console.log(newNames);

//ZRÓB TO SAMO DLA METODY FILTER()