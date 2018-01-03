const {ObjectId} = require('mongodb');
const{mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

 // Todo.remove({}).then((result) => {
 //   console.log(result);
 // });

Todo.findByIdAndRemove("5a4cdc45879aa173671abe99").then((todo) => {
  console.log(todo);
});
