import * as test from './emily';

describe('Example jasmine spec for nodejs runner', () => {
  var originalTimeout;
    beforeEach(function() {
      originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
      jasmine.DEFAULT_TIMEOUT_INTERVAL = 900000;
    });

  it('verify base function and object', done => {
     test.getAverage(4, 6, 0);
      done();
  });

  it('verify default parameter', done => {
    var ZooKeeper = require ("zookeeper");
var zk = new ZooKeeper({
  connect: "localhost:2181",
  timeout: 200000,
  debug_level: ZooKeeper.ZOO_LOG_LEVEL_WARN,
  host_order_deterministic: false
});
zk.connect(function (err) {
    if(err) throw err;
    console.log ("zk session established, id=%s", zk.client_id);
    zk.a_create ("/node.js1", "some value", ZooKeeper.ZOO_SEQUENCE | ZooKeeper.ZOO_EPHEMERAL, function (rc, error, path)  {
        if (rc != 0) {
            console.log ("zk node create result: %d, error: '%s', path=%s", rc, error, path);
        } else {
            console.log ("created zk node %s", path);
            process.nextTick(function () {
                zk.close ();
            });
        }
    });
});
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
