const promise1 = Promise.resolve("성공");
const promise2 = Promise.resolve("성공1");

(async () => {
  for await (promise of [promise1, promise2]) {
    console.log(promise);
  }
})();
