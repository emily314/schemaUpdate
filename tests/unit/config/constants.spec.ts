import * as Constants from '../../../src/constants';
describe('Core Microservice Constants', () => {
  it('verify constants are set', () => {
    expect(Constants.BEARER_TOKEN_PREFIX).not.toBeNull();
  });
});
