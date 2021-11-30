install mocha --save-dev

add script
"test" :"mocha folder/\*.spec.js"

then do npm test

sing file test -
"test-single" :"mocha"
npm run test-single -- test/spy.spec.js

describe - describe about your test case function
it - what do you want to do with it(test case function)

install chai - It is a testing library
it provides 3 methods to test

1-assert
2-should
3-expect

sinon.js
It is astandalone test spies,stubs,mocks for javascript.
It will work with any unit testing framework
