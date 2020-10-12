const exec = require("child_process").exec;

var process = exec("chcp 65001 | dir", { encoding: "UTF-8" });

process.stdout.on("data", function (data) {
  console.log(data.toString());
}); // 실행 결과

process.stderr.on("data", function (data) {
  console.error(data.toString());
}); //실행 에러
