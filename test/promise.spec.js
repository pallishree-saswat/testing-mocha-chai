const chai = require("chai");
const chai_as_promise = require("chai-as-promised");
var expect = chai.expect;
var Student = require("../controllers/studentCtrl");
const userCtrl = require("../controllers/userCtrl")
let studentObj = new Student();

chai.use(chai_as_promise);

describe("---Promise based function check", function () {
  it("db data check", function (done) {
    studentObj.dbData().then(function (result) {
      expect(result).to.be.equal("OK");
      done();
    });
  });
});

describe("---Promise based function check with chai as promised", function () {
  it("db data check", function () {
      this.timeout(0);
    return expect(studentObj.dbData()).to.eventually.equal("OK");
  });

  it("OTP ", function () {
    return expect(userCtrl.newsData()).to.eventually.have.deep.property('otp');
  });
});
