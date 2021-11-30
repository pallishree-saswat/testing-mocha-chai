const chai = require("chai");
var sinon = require("sinon");
var expect = chai.expect;
var Student = require("../controllers/studentCtrl")
let studentObj = new Student()


describe("---Spy Sinon Check", function () {
    it("userId return data check", function () {
     expect(studentObj.userId()).to.be.equal(12)
    });
  
    it("function count", function () {
        var spyObj = sinon.spy(studentObj, 'getInfo')
        studentObj.home(10)
        expect(spyObj.calledOnce).to.be.true;
       });

  });
  