/* Copyright IBM Corp. 2017  All Rights Reserved.                    */
import loopback from 'loopback';
import reqres from 'reqres';
const probes = require('../../../src/boot/probes');

describe('actioncenter loobpack boot validation', () => {
  const app = (module.exports = loopback());

  it('verify base function and object', () => {
    expect(probes).not.toBe(null);
    expect(probes).toEqual(jasmine.any(Function));
  });

  it('verify base function and object', () => {
    probes(app);
  });

  it('Unit test for probe endpoint', () => {
    let endCalled = null;
    const req = reqres.req({
      url: '/healthy',
      method: 'GET',
    });
    const res = reqres.res({
      setHeader: () => null,
      end() {
        endCalled = true;
      },
      status(code) {
        expect(code).toBe(200);
      },
      writeHead: () => null,
    });
    app.handle(req, res);
    expect(endCalled).toBe(true);
  });
});
