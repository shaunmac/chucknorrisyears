$(document).ready(function(){

  var videoResult = 'video/result-video.mp4';
  var videoHome =  'video/home-video.mp4';

  $('#datetimepicker1').datetimepicker({
      format: 'YYYY'
  });

  function calculateChuckNorrisYears() {
    var d = new Date();
    var norrisAgeCalculation = d.getFullYear() - 1940;
    var formControl = $('.form-control').val();

    if(formControl.length === 4) {

      $('.form').addClass('hidden');
      if(formControl != ''){
        var userAge = d.getFullYear() - (moment(formControl, 'YYYY').year());

        if (userAge > 12) {
          var newAge = 21 / norrisAgeCalculation * userAge;
          $('.user-age').html(Math.round(newAge));
          $('.video').attr('src', videoResult);
          $('.success').removeClass('hidden');
        } else {
          $('.too-young').removeClass('hidden');
        }
      } else {
        $('.fail').removeClass('hidden');
        console.log("form contol: " + formControl);
      }
    }

  }

  $('.btn-calculate').on('touch click', function(){
    calculateChuckNorrisYears();
  });
  // calculate again button
  $('.btn-back').on('touch click', function(){
    $(this).parent().addClass('hidden');
    $('.form').removeClass('hidden');
    $('.video').attr('src', videoHome);
  });

});
