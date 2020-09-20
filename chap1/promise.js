const condition = false;

const promise = new Promise((resolve, reject) => {
  if (condition) {
    resolve("성공");
  } else {
    reject("실패");
  }
});

//다른 코드가 들어갈 수 있음
promise
  .then((message) => {
    // resolve일때
    console.log(message);
  })
  .catch((error) => {
    // reject일때
    console.log(error);
  })
  .finally(() => {
    //끝나고 무조건 실행
    console.log("무조건");
  });
