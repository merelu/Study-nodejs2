const promise1 = Promise.resolve("성공");
const promise2 = Promise.resolve("성공2");
Promise.all([promise1, promise2])
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  });
