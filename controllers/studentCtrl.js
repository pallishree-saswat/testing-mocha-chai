const axios = require("axios")

class Student {
  constructor() {}

  home(type) {
    let data = this.getInfo(type, 1);
    return data + 5;
  }

  userId() {
    return 12;
  }

  getInfo() {
    return 10;
  }

  dbData() {
    return new Promise(function (myResolve, myReject) {
      let x = 0;

      if (x == 0) {
        setTimeout(() => myResolve("OK"), 1500);
      } else {
        myReject("Error");
      }
    });
  }

  //https://jsonplaceholder.typicode.com/posts

  thirdPartyApi() {
    return new Promise((resolve, reject) => {
      axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then((response) => {
          resolve(response.data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }
}

module.exports = Student;
