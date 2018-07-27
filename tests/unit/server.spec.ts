import * as server from '../../src/server';

describe('loobpack server validation', () => {
  it('verify base function and object', () => {
    expect(server).not.toBe(null);
  });

  it('verify base function and object', async () => {
    expect(server).not.toBe(null);
    await (server as any).start();
    await (server as any).stop();
  });
});
