// function getTempCallback (location, callback) {
//   callback(undefined, 78);
//   callback('City not found');
// }
//
// getTempCallback('Atlanta', function (err, temp) {
//   if (err) {
//     console.log('error', err);
//   } else {
//     console.log('success', temp);
//   }
// });
//
// function getTempPromise (location) {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       resolve(79);
//       reject('City not found');
//     }, 2000);
//   });
// }
//
// getTempPromise ('Atlanta').then(function (temp) {
//   console.log('promise success', temp);
// }, function (err) {
//   console.log('promise error', err);
// });

function addPromise (a, b) {
  return new Promise(function (resolve, reject) {
    if (typeof a === 'number' && typeof b === 'number'){
      resolve(a + b);
    } else {
      reject("These aren't both numbers!");
    }
  });
}

addPromise(2, 6).then(function (temp) {
  console.log('Success:', temp);
}, function (err) {
  console.log('Error:', err);
});

addPromise(10, 'NaN').then(function (temp) {
  console.log('Success:', temp);
}, function (err) {
  console.log('Error:', err);
});
