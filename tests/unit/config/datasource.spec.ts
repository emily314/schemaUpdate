describe('loobpack datasource validation', () => {
  it('verify basic export and fail case with no production connection', () => {
    try {
      process.env.DB_HOST = 'mongo_host';
      process.env.DB_PORT = 'mongo_port';
      const datasources = require('../../../src/config/datasources.dbprod');
      expect(datasources).not.toBe(null);
      expect(datasources.helloDb).not.toBeNull();
      expect(datasources.helloCassandraDb).not.toBeNull();
    } catch (e) {
      console.log(e);
      fail();
    }
  });
});
