import template from '../../src/example';
import { cube, square, isPrime, print1to20 } from '../../src/utils';

describe('Example jasmine spec for nodejs runner', () => {
  it('verify base function and object', () => {
    expect(template).not.toBe(null);
    expect(template).toEqual(jasmine.any(Function));
  });

  it('Verify that template will return hello world string', () => {
    expect(template()).toEqual('Hello World from resource-base-service');
  });
});

describe('Utilities functions', () => {
  it('Verify that cube(3) will return 27', () => {
    expect(cube(3)).toEqual(27);
  });

  it('Verify that square(3) will return 9', () => {
    expect(square(3)).toEqual(9);
  });

  it('Verify that 5 is a prime number', () => {
    expect(isPrime(5)).toBe(true);
  });

  it('Verify that 4 is not a prime number', () => {
    expect(isPrime(4)).toBe(false);
  });

  it('Verify it prints 1 thourgh 20 stupidly.', () => {
    expect(print1to20()).toBe(true);
  });
});
