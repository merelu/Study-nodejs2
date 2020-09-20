function findAndSaveUser(Users) {
  Users.findOne({}, (err, user) => {
    //첫 번째 콜백
    if (err) {
      return console.error(err);
    }
    user.name = "Zero";
    user.save((err) => {
      // 두 번째 콜백
      if (err) {
        return console.error(err);
      }
      Users.findOne({ gender: "m" }, (err, user) => {
        // 세 번째 콜백
      });
    });
  });
}

function findAndSaveUser_promise(Users) {
  Users.findOne({})
    .then((user) => {
      user.name = "zero";
      return user.save();
    })
    .then((user) => {
      return Users.findOne({ gender: "m" });
    })
    .then((user) => {
      //생략
    })
    .catch((err) => {
      console.error(err);
    });
}
