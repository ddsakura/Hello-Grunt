var a = require('./hello.js');
var b = new a();
console.log(b.getName());
b.setName('aaa');
console.log(b.getName());
console.log(b.name);