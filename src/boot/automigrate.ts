/**
 * Ensure that the schema tables are created
 */

var ZooKeeper = require ("zookeeper");
var zk = new ZooKeeper({
  connect: "localhost:2181",
  timeout: 200000,
  debug_level: ZooKeeper.ZOO_LOG_LEVEL_WARN,
  host_order_deterministic: false
});

var Rorschach = require('rorschach');
var Lock = Rorschach.Lock;
var client = new Rorschach('127.0.0.1:2181');
const PATH = "/version";

function sleep(time) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, time);
    })
  };

function createNodeStoreVersion()
{  
    return new Promise((resolve, reject) => {
   zk.connect(function (err) {
    if(err) reject(err);
    console.log ("zk session established, id=%s", zk.client_id);
    const PATH = "/version";
   // zk.a_create ("/version", "some value", ZooKeeper.ZOO_SEQUENCE | ZooKeeper.ZOO_EPHEMERAL, function (rc, error, path)  {
    zk.a_exists(PATH, null, function(rc, error, stat) {
        console.log ("zk node create result: %d, error: '%s', path=%s", rc, error, stat);
        if(rc != 0) {
            reject( new Error('Zookeeper Error: code='+rc+'   '+error));
          }
          if (error !== 'ok'){
        zk.a_create ("/version", "some value", ZooKeeper.ZOO_PERSISTEN, function (rc2, error2, path2)  {
              if (rc2 != 0) {
            console.log ("zk node create result: %d, error: '%s', path=%s", rc2, error2, path2);
            reject( new Error('Zookeeper Error: code='+rc+'   '+error2));
        } 
           resolve();
    });
        } else {
    console.log('zk node already exist');
    resolve();
}
});
}); 
    });
}

function getSchemaVersion(){
    return new Promise((resolve, reject) => {
    zk.connect(function (err) {
        if(err) reject(err);
        console.log ("zk session established, id=%s", zk.client_id);
                // now get it
                var path = '/version';
                zk.a_get(path, false, function(rc2, error2, stat2, value) { // response
                  console.log ("zk node create result: %d, error: '%s', path=%s", rc2, error2, stat2);
                  var vstr = value.toString();
                  console.log(vstr);
                 /* process.nextTick(function () {
                      zk.close ();
                  });*/
                  resolve(vstr);
              });
    }); 
});
}

function setSchemaVersion(currentVersion){
    return new Promise((resolve, reject) => {
    zk.connect(function (err) {
        if(err) reject(err);
        console.log ("zk session established, id=%s", zk.client_id);
                zk.a_set (PATH, "some other value 2", -1, function (rc, error, stat) {
                    console.log ("set node result: %d, error: '%s', stat=%j", rc, error, stat);
                    if (rc != 0) {
                        reject(error);
                    }
                    resolve(currentVersion);
                });
    });
});  

}

function needUpdateSchema(currentVersion)
{
    return new Promise((resolve) => {
    return getSchemaVersion().then((latestVersion)=> {
        if (currentVersion !== latestVersion) resolve(true);
        resolve(false);
    })
})
}


/*const lockBasePath = "/_locknode_";
const lockName = 'lock-';
const lock = () => {
    zk.connect(function (err) {
        if(err) throw err;
    console.log ("zk session established, id=%s", zk.client_id);
    zk.a_create (lockBasePath, null, ZooKeeper.ZOO_PERSISTEN, function (rc2, error2, path2)  {
        if (rc2 != 0) {
            console.log ("zk node create result: %d, error: '%s', path=%s", rc2, error2, path2);
        } else {
    zk.a_create (lockBasePath + "/" + lockName, null, ZooKeeper.ZOO_SEQUENCE | ZooKeeper.ZOO_EPHEMERAL, function (rc, error, path)  {
        console.log ("zk node create result: %d, error: '%s', path=%s", rc, error, path);
        if (rc != 0) {
            console.log ("zk node create result: %d, error: '%s', path=%s", rc, error, path);
        } else {
            zk.a_get_children(lockBasePath, false, function(rc3, error3, stat3) { 
                console.log ("zk node create result: %d, error: '%s', path=%s", rc3, error3, stat3);
            });
        }
    });
}
});
    });
} */

module.exports = function(server, cb) {

   /* var lock = new Lock(client, '/my/znodes/locks/myResource');
    lock.acquire(500, function afterAcquire(err) {
      // handle error
      if(err) throw err; 
      // do the work with `myResource`
       console.log('hello service got the lock');

      // sleep(10000);

      lock.release(/*callback(err)*/ //);
    //});
 return createNodeStoreVersion()
  .then(() => getSchemaVersion())
  .then((currentVersion)=> setSchemaVersion(currentVersion))
  .then((currentVersion) => needUpdateSchema(currentVersion))
  .then((isNeed)=>{

    if (isNeed) {
        var lock = new Lock(client, '/my/znodes/locks/myResource');
        lock.acquire(5000, function afterAcquire(err) {
          // handle error
          if(err) throw err; 
          // do the work with `myResource`
           console.log('hello service got the lock');
           const ds = server.datasources.sandboxcassandra;
           ds.autoupdate('Hello', (err, result) => {
               console.log(err, result);
               lock.release((err2) => {
                console.log(err2);
                cb();
               });
           });
          // sleep(10000);
    
         // lock.release(/*callback(err)*/);
});

 } else {
     cb();
 }

 //const currentVersion = getSchemaVersion();

  // setSchemaVersion('1');

  /*const latestVersion = getSchemaVersion(); 

  if (currentVersion !== latestVersion){
    var lock = new Lock(client, '/my/znodes/locks/myResource');
    lock.acquire(500, function afterAcquire(err) {
      // handle error
      if(err) throw err; 
      // do the work with `myResource`
       console.log('hello service got the lock');
       const ds = server.datasources.sandboxcassandra;
       ds.autoupdate('Hello', cb);
      // sleep(10000);

      lock.release(/*callback(err)*///);
   // });
 // }
  
 /*const ds = server.datasources.sandboxcassandra;
  ds.autoupdate('Hello', cb);*/

  // var Buffer = require('buffer').Buffer;
 // var util   = require('util');
 //lock();

/* zk.connect(function (err) {
    if(err) throw err;
    console.log ("zk session established, id=%s", zk.client_id);
    const PATH = "/version";
   // zk.a_create ("/version", "some value", ZooKeeper.ZOO_SEQUENCE | ZooKeeper.ZOO_EPHEMERAL, function (rc, error, path)  {
    zk.a_exists(PATH, null, function(rc, error, stat) {
        console.log ("zk node create result: %d, error: '%s', path=%s", rc, error, stat);
        if(rc != 0) {
            throw new Error('Zookeeper Error: code='+rc+'   '+error);
          }
          if (error !== 'ok'){
        zk.a_create ("/version", "some value", ZooKeeper.ZOO_PERSISTEN, function (rc2, error2, path2)  {
        if (rc2 != 0) {
            console.log ("zk node create result: %d, error: '%s', path=%s", rc2, error2, path2);
        } else {
            // now get it
            zk.a_get(PATH, false, function(rc3, error3, stat3, value) { // response
              console.log ("zk node create result: %d, error: '%s', path=%s", rc3, error3, stat3);
              var vstr = value.toString();
              console.log(vstr);
              process.nextTick(function () {
                  zk.close ();
              });
          });
        }
    });
} else {
    zk.a_get(PATH, false, function(rc3, error3, stat3, value) { // response
        console.log ("zk node create result: %d, error: '%s', path=%s", rc3, error3, stat3);
        var vstr = value.toString();
        console.log(vstr);
        process.nextTick(function () {
            zk.close ();
        });
    });
}

});
}); */
 })
 .catch(e => {
    console.log(e);
    cb();
  })
}; 
