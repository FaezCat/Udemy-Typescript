"use strict";
const names = []; // string[]
// names[0].split(" ");
// returns a promise of the generic type string - typecasted using the <> operators
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(10);
    }, 2000);
});
promise.then(data => {
    // data.split(" ");
});
