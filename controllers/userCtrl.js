const userList = async (req, res) => {
  res.send("hello");
};

const newsData = (req, res) => {
  return new Promise((resolve, reject) => {
    resolve({ otp: 123456 });
  });
};

module.exports = {
  userList,newsData
};
