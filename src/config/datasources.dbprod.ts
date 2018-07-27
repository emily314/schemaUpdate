/* Copyright IBM Corp. 2017  All Rights Reserved.                    */

const DBName = 'helloDb';
const DBNameCass = 'hello';
const config = {
  helloDb: {
    name: 'helloDb',
    file: 'mydataHello.json',
    connector: 'memory',
  },
  helloCassandraDb: {
    name: 'helloCassandraDb',
    connector: 'cassandra',
    database: DBNameCass,
    keyspace: DBNameCass,
    hostname: process.env.CASSANDRA_CLUSTER_CONTACT_POINTS,
    user: process.env.CASSANDRA_USERNAME || '',
    password: process.env.CASSANDRA_PASSWORD || '',
    connectTimeout: 30000,
    readTimeout: 30000,
  },
};

module.exports = config;
