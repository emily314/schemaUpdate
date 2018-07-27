import * as app from '../../../src/server';
//import uuid from 'uuid';
//import Promise from 'bluebird';


//const create = Promise.promisify(app['models'].Hello.create, { context: app['models'].Hello });

function getAverage(a: number, b: number, c?: number): string { 
  let total = a;
  let count = 1;
      total += b;
      count++;
      if (typeof c !== 'undefined') {
          total += c;
  count++; }
      const average = total / count;
      return 'The average is ' + average;
  }

describe('Example jasmine spec for nodejs runner', () => {
  var originalTimeout;
    beforeEach(function() {
      originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
      jasmine.DEFAULT_TIMEOUT_INTERVAL = 90000;
    });

  it('verify base function and object', done => {
    expect(app['models'].Hello).not.toBe(null);
    app['models'].Hello.hello('Joe', (_, value) => {
      expect(value).toBe('Hello Joe');
      done();
    });
  });
  it('verify create instance', done => {
    
     /*  const  originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 9000000000;
        console.log(originalTimeout); */

        enum VehicleType {
          PedalCycle,
          MotorCycle,
          Car,
          Van,
          Bus,
      Lorry }
      const type = VehicleType.Bus;
      const typeName = VehicleType[type]; // 'Lorry
      console.log(typeName);

    //  let union: boolean | number;
    //  union = false;

      interface Skier {
        slide(): void;
    }
    interface Shooter {
        shoot(): void;
    }
    type Biathelete = Skier & Shooter;

    let b: Biathelete ;
    b.shoot;

   // const name: string = 'Avenue Road';
   // const workingBedroomCount: number = <number><any>name;

    
      // 'The average is 5'
      const result = getAverage(4, 6);
      console.log(result);

     const record = {
       name : 12,
       id : 2,
       isSingedUp: true
     }

    // let result = await create(record);
    app['models'].Hello.create(record, {},(err, instance)=> {
       if (err !== null){
         const name = instance.name;
         console.log("record name: " + name );
         done();
       }
       else{
         console.log(err);
         done();
       }
     });
     
  });

  it('verify create hello', done => {
    
    /*  const  originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
       jasmine.DEFAULT_TIMEOUT_INTERVAL = 9000000000;
       console.log(originalTimeout); */

    const record = {
      name : 11,
      id : 2,
      isSingedUp: true,
      test: 3
    }

   // let result = await create(record);
   app['models'].Hello.createHello({appid:2}, {id:1,content: record},(err, instance)=> {
      if (err !== null){
        const name = instance.name;
        console.log("record name: " + name );
        done();
      }
      else{
        console.log(err);
        done();
      }
    });
    
 });

  it('verify get by Id', done => {
    const id = 3;
    app['models'].Hello.findById(id,(err,{}, instance)=> {
      if (err !== null){
        const name = instance.name;
        console.log("record name: " + name );
        done();
      }
      else{
        console.log(err);
        done();
      }
    });
  });

  it('verify get by Id', done => {
    const id = 3;
    app['models'].Hello.getHello(id,(err, instance)=> {
      if (err !== null){
        const name = instance.name;
        console.log("record name: " + name );
        done();
      }
      else{
        console.log(err);
        done();
      }
    });
  });

  it('verify update instance', done => {
    
    /*  const  originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
       jasmine.DEFAULT_TIMEOUT_INTERVAL = 9000000000;
       console.log(originalTimeout); */

    const record = {
      name : "test2 rename",
      id : 3,
      isSingedUp: true
    }

   // let result = await create(record);
   app['models'].Hello.upsert(record,(err, instance)=> {
      if (err !== null){
        const name = instance.name;
        console.log("record name: " + name );
        done();
      }
      else{
        console.log(err);
        done();
      }
    });
    
 });
 /* it('create data', (done) => {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 2000000;
    const r = {
      name : "test",
      id : 1,
      isSingedUp: true
    }       
    let result =  app['models'].Hello.create(r, done);
    console.log(result);
  }); */

  afterEach(function() {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
  });
});
