const express = require("express");

const router = express.Router();

// GET / 라우터
router.get(
  "/",
  (req, res, next) => {
    next("route");
  },
  (req, res, next) => {
    console.log("실행되지 않습니다.");
    next();
  },
  (req, res, next) => {
    console.log("실행되지 않습니다.");
    next();
  }
);

router.get("/", (req, res) => {
  console.log("실행됩니다.");
  res.send("Hello, Express");
});

module.exports = router;
