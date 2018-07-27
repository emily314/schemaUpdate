import request from 'request';

const SERVER = jasmine['server'];
const helper = jasmine['helper'];

describe('server is up', () => {
  it('displays json at /', done => {
    const url = `${SERVER}/`;
    const token = helper.login();
    request(
      url,
      {
        headers: {
          jwt: token,
        },
      },
      (error, response, body) => {
        expect(error).toBe(null);
        expect(response && response.statusCode).toBe(200);
        expect(body).not.toBe(null);
        done();
      },
    );
  });

  it('returns hello greeting to the supplied name', done => {
    const url = `${SERVER}/api/hello`;
    const qs = { name: 'Stephen' };
    request({ url, qs }, (error, response, body) => {
      expect(error).toBe(null);
      expect(response && response.statusCode).toBe(200);
      expect(body).not.toBe(null);
      expect(body).toBe('"Hello Stephen"');
      done();
    });
  });

  it('returns 400 error if name param is not supplied', done => {
    const url = `${SERVER}/api/hello`;
    request({ url }, (error, response) => {
      expect(error).toBe(null);
      expect(response && response.statusCode).toBe(400);
      done();
    });
  });
});
