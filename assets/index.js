$(document).ready(function () {
  //Initialize material components
  M.AutoInit();

  //Initialize the calendar
  setClock();
  loadCalendar();
  codeTime();

  //Set the interval to upddate clock and corresponding color codes
  setInterval(codeTime, 30000);


  function codeTime() {
    //Set the clock and timecode to update at the same interval
    setClock();
    //Find the current time
    var currentHour = moment().hours();
    //if (currentHour > 18) {localStorage.clear()};

    $('li').each(function () {
      var calendarHour = parseInt($(this).attr('value'));
      if (currentHour > calendarHour) {
        $(`#header-${calendarHour}`).addClass('teal lighten-4'); //Event is in the past
      } else if (currentHour < calendarHour) { 
        $(`#header-${calendarHour}`).addClass('teal'); //Event is in the future
      } else if (currentHour === calendarHour) {
        console.log('now');
      }
    });
  }

  //Render the current date and time in the header
  function setClock() {
    var currentTime = moment().format('LLLL');
    $("h3").text(currentTime);
  }

  //Save input fields to local storage
  $('.btn').on('click', function () {
    var time = this.id;
    var eventName = $(`#name-${time}`).val();
    var details = $(`#details-${time}`).val();

    localStorage.setItem(`name-${time}`, eventName);
    localStorage.setItem(`details-${time}`, details);
    //localStorage.setItem(`submit-date`, moment().format('ll'));
    loadCalendar(); //Reload page and populate headers
  });

  function loadCalendar() {
    var id = 8; //the HTML 'id' is the hour of the current key being rendered
    for (let i = 0; i < 11; i++) {
      var savedName = localStorage.getItem(`name-${id}`);
      var savedDetails = localStorage.getItem(`details-${id}`);

      if (localStorage.getItem(`name-${id}`) === null) {
        console.log('null');
      } else {
        $(`#badge-${id}`).html(`${savedName}`);
        //because the collapsible menu doesn't accomodate internal divs, icons have to be re-rendered.
        $(`#body-${id}`).html(`<h5>${savedName}</h5><p>${savedDetails}</p>`);
      }
      id += 1; //When event name and details are rendered, set the id to the next hour
    }
  }  

  //Set the calendar to expire after one day
  /* function resetCalendar() {
    var expire = moment().endOf('day').fromNow();
    
  } */

});











