const {SHA256} = require('crypto-js');
const {SHA512} = require('crypto-js');
const {SHA3} = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

var password = '123abc!';

// bcrypt.genSalt(10, (error, salt) =>{
//   bcrypt.hash(password, salt, (error, hash) => {
//   console.log(hash);
//   });
// });

var hashedPassword = '$2a$10$M5gFQfhhsI5HFrK4xUFQleD9MJ6lDlq3jY3zsVKTca6CsQHIokAli';
bcrypt.compare(password, hashedPassword, (error, result) => {
  console.log(result);
});

// var data = {
//   id: 10
// };
//
// var token = jwt.sign(data, 'abc123');
// console.log(token);
//
// var decoded = jwt.verify(token, 'abc123');
// console.log('decoded', decoded);

// var message = 'I am  user number 3';
// var hash = SHA256(message).toString();
// var hash1 = SHA512(message).toString();
// var hash2 = SHA3(message).toString();
//
//
//
// console.log(`Message: ${message}`);
// console.log(`hash 256: ${hash}`);
// console.log(`hash 512: ${hash1}`);
// console.log(`hash 3: ${hash2}`);
