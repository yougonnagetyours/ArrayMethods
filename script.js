function forEachFn(array, callback){
  if (!Array.isArray(array)) throw new Error("wprowadź tablicę");
  if (callback != function) throw new Error("to nie jest funkcja");

  const newArray = [...array];

  for (const index in newArray) {
    const id = parseInt
  }
}