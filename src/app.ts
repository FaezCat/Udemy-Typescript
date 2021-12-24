const names: Array<string> = []; // string[]
// names[0].split(" ");


// returns a promise of the generic type string - typecasted using the <> operators
const promise: Promise<number> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(10);
  }, 2000);
});

promise.then(data => {
  // data.split(" ");
});