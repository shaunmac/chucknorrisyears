$(document).ready(function(){

  $('#datetimepicker1').datetimepicker({
      format: 'DD.MM.YYYY'
  });

  function calculateChuckNorrisYears() {
    var d = new Date();
    var norrisAgeCalculation = d.getFullYear() - 1940;
    var formControl = $('.form-control').val();
    $('.form').addClass('hidden');
    if(formControl != ''){
      var userAge = d.getFullYear() - (moment(formControl, 'DD.MM.YYYY').year());


      if (userAge > 12) {
        var newAge = 21 / norrisAgeCalculation * userAge;
        $('.user-age').html(Math.round(newAge));
        $('.success').removeClass('hidden');
      } else {
        $('.too-young').removeClass('hidden');
      }
    } else {
      // form control is empty
      $('.fail').removeClass('hidden');
      console.log("form contol: " + formControl);
    }


  }

  $('.btn-calculate').on('touch click', function(){
    calculateChuckNorrisYears();
  });
  // calculate again button
  $('.btn-back').on('touch click', function(){
    $(this).parent().addClass('hidden');
    $('.form').removeClass('hidden');

  });

});
