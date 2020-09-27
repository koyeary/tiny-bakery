$(document).ready(function () {

  //Initialize material components
  $('.collapsible').collapsible();
  
  //Update the header and color coding every 10 seconds
  setClock();
  codeTime();
  setInterval(codeTime, 6000);
  

  function codeTime() {
    //start the clock here so that clock and timecode are updated at the same interval
    setClock();

    //Find the current time
    var currentHour = moment().hours();
    /* find the current minute to set for alert toast */ 

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

   //function renderTime(time) {
    //localStorage.setItem(time); 

     $('.btn').on('click', function() {
      //var description = this.previousElementSibling;
      var time = this.id;
      var text = $(`#description-${time}`).val();
      console.log(text);
      
      console.log(time);
      //Focuses on description input
    }); 
  
/*     $(this.id).focusin(function () {

    }) */
    //get event form input and render event name to header
    //retrieve description from DOM (will be children or siblings)
    //$get HTML id, val, get information from storage



});





