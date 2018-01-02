const {ObjectId} = require('mongodb');
const{mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var userId = '5a4ba930884beba439556578';

User.findById(userId).then((user) => {

  if(!user){
  return  console.log('Unable to find user');
  }
  console.log('User: ', user);
}).catch((e) => console.log(e));

// var id = '5a4bcd372c95b878440b7c9daa';
//
//
// if (!ObjectId.isValid(id)){
//   console.log('Invalid Id');
// }
// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//   if(!todo){
//     return console.log('Id not found');
//   }
//   console.log('Todo by ID:', todo);
// }).catch((e) => console.log(e));
