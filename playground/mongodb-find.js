// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, db) => {
  if(error){
  return console.log("Unable to connect to db server");
  }
  console.log('Connected to mongodb server');

  // db.collection('Todos').find({
  //   _id: new ObjectID("5a4ac4108dc451b01e5a009c")
  // }).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  //
  // }, (error) => {
  //   console.log(`Unable to fetch Todos: ${error}`);
  // });


  // db.collection('Todos').find().count().then((count) => {
  //   console.log(`Todos count: ${count}`);
  //   // console.log(JSON.stringify(count, undefined, 2));
  //
  // }, (error) => {
  //   console.log(`Unable to fetch Todos: ${error}`);
  // });

  db.collection('Users').find({
  name: 'john Doe'
}).toArray().then((users) => {
    console.log('Users');
    console.log(JSON.stringify(users, undefined, 2));

  }, (error) => {
    console.log(`Unable to fetch Todos: ${error}`);
  });

  // db.close();
});
