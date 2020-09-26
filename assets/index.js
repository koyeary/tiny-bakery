$(document).ready(function () {

  //setInterval()
  //Initialize material components
  $('.collapsible').collapsible();
  setInterval(codeTime, 6000);
  

  function codeTime() {
    //Get the current hour
    setClock();
    var currentHour = moment().hours();
    console.log(currentHour);

    $('li').each( function() {
      var calendarHour = parseInt($(this).attr('value'));
       if (currentHour > calendarHour) {
        $(`#${calendarHour}`).addClass('teal lighten-4');
      } else if (currentHour < calendarHour) {
        $(`#${calendarHour}`).addClass('teal');
      } else if (currentHour === calendarHour) {
      } 
    });
  }

    //Render the current date and time in the header
    function setClock() {
      var currentTime = moment().format('LLLL');
      $("h2").text(currentTime);
    }
 /*  function renderTime(time) {
    localStorage.setItem(time); */


    //retrieve description from DOM (will be children or siblings)
    //$get HTML id, val, get information from storage

  

  codeTime();


});





