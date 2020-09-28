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
    loadCalendar();
    //Find the current time
    var currentHour = moment().hours();
    /* find the current minute to set for alert toast */ 

    $('li').each( function() {
      var calendarHour = parseInt($(this).attr('value'));
       if (currentHour > calendarHour) {
        $(`#header-${calendarHour}`).addClass('teal lighten-4');
      } else if (currentHour < calendarHour) {
        $(`#header-${calendarHour}`).addClass('teal');
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

//save input fields to local storage
     $('.btn').on('click', function() {
      var time = this.id;
      var details = $(`#details-${time}`).val();
      var eventName = $(`#name-${time}`).val();
      
      localStorage.setItem(`name-${time}`, eventName);
      localStorage.setItem(`details-${time}`, details);
      loadCalendar();
      //Reload page and populate headers
    }); 
  
     function loadCalendar() {
      var id = 8;
      for (let i = 0; i < 11; i++) {
        var savedName = localStorage.getItem(`name-${id}`);
        var savedDetails = localStorage.getItem(`details-${id}`)
        console.log(savedDetails);
        if (localStorage.getItem(`name-${id}`) === null) {
          console.log('null');
        } else {
        $(`#header-${id}`).html(`${id}:00 ${savedName}`);  
        $(`#body-${id}`).html(`${savedDetails}`);
        }
        id += 1;
      }
    }
    });  
    
/*     $(this.id).focusin(function () {

    }) */
    //get event form input and render event name to header
    //retrieve details from DOM (will be children or siblings)
    //$get HTML id, val, get information from storage









