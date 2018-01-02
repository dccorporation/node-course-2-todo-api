// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, db) => {
  if(error){
  return console.log("Unable to connect to db server");
  }
  console.log('Connected to mongodb server');

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID("5a4b7cda7683e3e4bfda9f2c")
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result);
  // });

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID("5a4b81237683e3e4bfdaa029")
  }, {

    $set: {
      name: "John D.",
      location: "United States Of America"
    },
    $inc: {
      age: 1
    }

  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });

  // db.close();
});
