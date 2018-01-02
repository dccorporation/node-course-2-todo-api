// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, db) => {
  if(error){
  return console.log("Unable to connect to db server");
  }
  console.log('Connected to mongodb server');

 //delete many
// db.collection('Todos').deleteMany({text: "Eat Lunch"}).then((result) => {
//   console.log(result);
// });

 //deleteOne
// db.collection('Todos').deleteOne({text: "Eat Lunch"}). then ((result) => {
//   console.log(result);
// });

 //findOneAndDelete
// db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
//   console.log(result);
// });


//deleteMany
// db.collection('Users').deleteMany({name: "john Doe"}).then((result) => {
//   console.log(result);
// });

//deleteOne
// db.collection('Users').deleteOne({_id: new ObjectID("5a4b812e7683e3e4bfdaa02d")}).then((result) => {
//   console.log(result);
// });

//findOneAndDelete
db.collection('Todos').findOneAndDelete({_id: new ObjectID("5a4b812e7683e3e4bfdaa02d")}).then((result) => {
  console.log(result);
});
  // db.close();
});
