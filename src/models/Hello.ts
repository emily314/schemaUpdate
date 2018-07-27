import xss = require('xss');
import _ from 'lodash';

module.exports = Hello => 
{
  interface contentObj {
    id: number;
    name: string;
    isSingedUp?: boolean;
  }
  interface dataObj {
    appId: number;
    content: contentObj;
}
/*interface Point {
   x: number;
   readonly y: number;
}
let p1: Point = { x: 10, y: 20 };*/


  Hello.createHello = ( context:{appid:number},data:dataObj, cb) => {
      if (!_.isObject(data) || _.isArray(data)) {
        const errMsg : string = 'data should not be null or array';
        return cb(new Error(errMsg), null);
      }

      // Set id for data
      data.appId = context.appid;

      if (data.content) {
        Object.defineProperty(data.content, 'toString', {
          value: () => JSON.stringify(data.content),
          configurable: true,
        });
      }
    return Hello.create(data.content, cb);
  };

  Hello.getHello = ( id:number, cb) => {

    if(typeof id === 'undefined') {
      return cb(new Error('id is not assign value'), null);
    }    
    return Hello.findById(id,(err,instance) => {
        if (err) {
          const errMsg = `fail to retrieve hello by ${id}: ${err}`;
         
          return cb(new Error(errMsg), null);
        }

        if (!instance) {
          const errMsg = `Hello ${id} is not found`;

          return cb(new Error(errMsg), null);
        }

        return cb(null, instance);
      },
    );
  };

  Hello.remoteMethod('hello', {
    http: { path: '/', verb: 'get' },
    accepts: {
      arg: 'name',
      type: 'string',
      required: true,
      description: 'Your name',
    },
    returns: {
      arg: 'hello',
      type: ['Hello'],
      root: true,
      description: 'Your Greeting',
    },
    description: 'Hello world greeting',
  });

  Hello.hello = (query, cb) => {
    const name = xss(query);
    cb(null, `Hello ${name}`);
  };
};
