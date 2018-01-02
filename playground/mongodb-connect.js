// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


// var user = {name: 'Deep', age: 25};
// var {name} = user;
// console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, db) => {
  if(error){
  return console.log("Unable to connect to db server");
  }
  console.log('Connected to mongodb server');

  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (error, result) => {
  //   if(error){
  //     return console.log('Unable to insert todo');
  //   }
  //
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });


// db.collection('Users').insertOne({
//   name: 'Deep Chawla',
//   age: '24',
//   location: 'Amritsar'
// }, (error, result) => {
//   if(error){
//     return console.log("Unable insert Users", error);
//   }
//   console.log(JSON.stringify(result.ops, undefined, 2));
//
// });

  db.close();
});
