//Nock is a library that helps us provide custom responses to HTTP-
//-requests made in our application and is handy for use during testing
//Nock can be used to test modules that perform HTTP requests in isolation.
const chai = require("chai");
const nock = require("nock");
// const chai_as_promise = require("chai-as-promised");
var expect = chai.expect;
var Student = require("../controllers/studentCtrl");
let studentObj = new Student();

//api testing with nock

describe("Nock Test suit", function () {
  it("api test", function (done) {
    var obj = { status: "ok", statusCode: 200, data: [] };
    const apiHit = nock("https://jsonplaceholder.typicode.com")
      .get("/posts")
      .reply(200, obj);

    studentObj
      .thirdPartyApi()
      .then(function (record) {
        expect(record).to.be.eql(obj);
        done();
      })
      .catch((error) => {
        done(new Error(`error:` + error));
      });
  });
});
