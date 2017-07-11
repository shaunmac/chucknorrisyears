$(document).ready(function(){

  function calculateChuckNorrisYears() {
    var d = new Date();
    var norrisAgeCalculation = d.getFullYear() - 1940;
    var userAge = $('.form-control').value;

    console.log('userAge: ' + userAge);

    if (userAge > 12) {
      var newAge = 21 / norrisAgeCalculation * userAge;
      document.body.innerHTML = ('YOU ARE '  + Math.round(newAge + 9)) + ' IN CHUCK NORRIS YEARS';
    } else {
      document.body.innerHTML = ('sorry you are too young for this calculation');
    }
  }

  $('.btn').on('touch click', function(){
    calculateChuckNorrisYears();
  });

});
