const root = require('../../../src/boot/root');

const loopback = require('loopback');

describe('root loobpack boot validation', () => {
  it('verify base function and object', () => {
    expect(root).not.toBe(null);
    expect(root).toEqual(jasmine.any(Function));
  });

  it('verify base function and object', () => {
    const app = (module.exports = loopback());
    root(app);
  });
});
