var relationship1 = {
  name: "Zero",
  friends: ["nero", "hero", "xero"],
  logFriends: function () {
    var that = this;
    this.friends.forEach(function (friend) {
      console.log(that.name, friend);
    });
  },
};

const relationship2 = {
  name: "Zero",
  friends: ["nero", "hero", "xero"],
  logFriends() {
    this.friends.forEach((friend) => {
      console.log(this.name, friend);
    });
  },
};
