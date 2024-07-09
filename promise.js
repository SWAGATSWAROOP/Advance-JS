const flag = true;

const promise = createAPromise(true)
  .then((value) => {
    console.log(`the value is ${value}`);
  })
  .catch((err) => console.log(err.message));

async function createAPromise(value) {
  const p = await new Promise((resolve, reject) => {
    if (value) {
      setTimeout(() => {
        console.log("The promise has been resolved");
        resolve(5);
      }, 20000);
    } else {
      const err = new Error("The value is false");
      reject(err);
    }
  });

  return p;
}

console.log(promise);
