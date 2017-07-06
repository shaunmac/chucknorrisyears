var myVideo =  iframe.getElementById('video-bg');
myVideo.mute();


//this is where our logic will go
// var norrisAge = 77;
// march 10, 1940 birthday calculation value
var d = new Date();
var norrisAgeCalculation = d.getFullYear() - 1940;
// console.log(norrisAgeCalculation);

var x = 13;


if (x > 12) {
  // console.log("hello");
  var newAge = 21 / norrisAgeCalculation * x;
  console.log(Math.round(newAge + 9));
} else {
  console.log('sorry you are too young for this calculation');
}
