const {SHA256} = require('crypto-js');
const {SHA512} = require('crypto-js');
const {SHA3} = require('crypto-js');
const jwt = require('jsonwebtoken');

var data = {
  id: 10
};

var token = jwt.sign(data, 'abc123');
console.log(token);

var decoded = jwt.verify(token, 'abc123');
console.log('decoded', decoded);

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
