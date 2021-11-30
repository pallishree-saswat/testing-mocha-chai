const chai = require("chai");

var assert = chai.assert;
var expect = chai.expect;
var should = chai.should();

//assert
describe("Asspect check", function () {
  let username = "hello";
  let mylist = {
    item: [
      {
        id: 1,
        name: "demo",
      },
    ],
  };
  it("check string", function () {
    assert.typeOf(username, "string");
  });

  it("equal match", function () {
    assert.equal(username, "hello");
  });

  it("length match", function () {
    assert.lengthOf(mylist.item, 1);
  });
});

//should
describe("should check", function () {
  let username = "hello";
  let mylist = {
    item: [
      {
        id: 1,
        name: "demo",
      },
    ],
  };
  it("check string", function () {
    username.should.be.a("string");
  });

  it("equal match", function () {
    username.should.equal("hello");
  });

  it("length match", function () {
    mylist.should.have.property("item").with.lengthOf(1);
  });
});

//expect
describe("expect check", function () {
  let username = "hello";
  let mylist = {
    item: [
      {
        id: 1,
        name: "demo",
      },
    ],
    title: "something ",
    address: {
      country: "India",
      phoneNo: ["9874563210", "1234567890"],
    },
  };
  it("check string", function () {
    expect(username).to.be.a("string");
  });

  it("equal match", function () {
    expect(username).to.equal("hello");
  });
  it("length match", function () {
    expect(username).to.lengthOf(5);
  });

  it("object length", function () {
    expect(mylist).to.have.property("item").with.lengthOf(1);
  });

  it("api object field/keys check", function () {
    expect(mylist).to.have.all.keys("item", "title", "address");
  });
  it("phone no check", function () {
    expect(mylist).to.have.nested.property("address.phoneNo[1]"); //there are 2  phone numbers so it will pass
    //expect(mylist).to.have.nested.property('address.phoneNo[3]')  //there are not 3 phone numbers so it will fail
  });

  it("country name check", function () {
    // expect(mylist).to.have.nested.property('address.country')
    expect(mylist).to.have.nested.include({ "address.country": "India" });
    // expect(mylist).to.have.nested.property({'address.phoneNo[0]':'9874563210'})
  });
});
