const fs = require("fs").promises;

console.log("시작");

async function asyncOrder() {
  try {
    let data = await fs.readFile("./readme2.txt");
    console.log("1번", data.toString());
    data = await fs.readFile("./readme2.txt");
    console.log("2번", data.toString());
    data = await fs.readFile("./readme2.txt");
    console.log("3번", data.toString());
  } catch (err) {
    console.error(err);
  }
}

asyncOrder();
