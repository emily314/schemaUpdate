import * as test from './emily';

describe('Example jasmine spec for nodejs runner', () => {
  var originalTimeout;
    beforeEach(function() {
      originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
      jasmine.DEFAULT_TIMEOUT_INTERVAL = 90000;
    });

  it('verify base function and object', done => {
     test.getAverage(4, 6, 0);
      done();
  });

  it('verify default parameter', done => {
    const items = ['A', 'B', 'C'];
    const result = test.concatenate(items);
    console.log(result);
     done();
 });

 it('verify rest parameter', done => {
  const result = test.getAverageRest(2,4,6,8,10);
  console.log(result);
   done();
});

it('verify function overload', done => {
  const result = test.getAverageOverload('t', 'e', 's');
  console.log(result);
   done();
});

it('verify preserve this scope', done => {
  const result = test.scopePreservingExample.run();
  console.log(result);
   done();
});
  
  afterEach(function() {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
  });
});
