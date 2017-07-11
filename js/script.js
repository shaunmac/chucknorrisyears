$(document).ready(function(){

  $('#datetimepicker1').datetimepicker({
      format: 'DD.MM.YYYY'
  });

  function calculateChuckNorrisYears() {
    var d = new Date();
    var norrisAgeCalculation = d.getFullYear() - 1940;
    var formControl = $('.form-control').val();
    var userAge = d.getFullYear() - (moment(formControl, 'DD.MM.YYYY').year());

    console.log(userAge)

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
