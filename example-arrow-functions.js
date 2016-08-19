var names = ['Andrew', 'Julie', 'Jen'];

// names.forEach(function (name) {
//   console.log('forEach', name);
// });
//
// names.forEach((name) => {
//   console.log('arrowFunc', name);
// });
//
// names.forEach((name) => console.log(name));

// var returnMe = (name) => console.log(name + '!');
// returnMe('Cliffy');
//
// var person = {
//   name: 'Cliffy',
//   greet: function () {
//     names.forEach((name) => {
//       console.log(this.name + ' says hi to ' + name);
//     });
//   }
// }
//
// person.greet();

function add (a, b) {
  return a + b;
}

var addStatement = (a, b) => {
  return a + b;
}
var addExpression = (a, b) => (a + b);

console.log(addStatement(1, 5));
console.log(addExpression(9, -1));
