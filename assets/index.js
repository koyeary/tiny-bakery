$(document).ready(function () {
  //Initialize material components
  $('.collapsible').collapsible();

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
        $(`#header-${calendarHour}`).addClass('teal lighten-5'); //Event is in the past
        $(`#badge-${calendarHour}`).addClass('black-text');
      } else if (currentHour < calendarHour) {
        $(`#header-${calendarHour}`).addClass('teal'); //Event is in the future
        $(`#badge-${calendarHour}`).addClass('white-text');
      } else if (currentHour === calendarHour) {
        $(`#badge-${calendarHour}`).addClass('black-text');
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
    loadCalendar(); //Reload page and populate headers
  });

  function loadCalendar() {
    resetCalendar();
    var id = 8; //the HTML 'id' is the hour of the current key being rendered
    for (let i = 0; i < 11; i++) {
      var savedName = localStorage.getItem(`name-${id}`);
      var savedDetails = localStorage.getItem(`details-${id}`);

      if (localStorage.getItem(`name-${id}`) === null) {
        console.log('null');
      } else {
        $(`#badge-${id}`).html(`${savedName}`);
        //because the collapsible menu doesn't accomodate internal divs, icons have to be re-rendered.
        $(`#body-${id}`).html(`<h5>${savedName}</h5><blockquote>${savedDetails}</blockquote>`);
      }
      id += 1; //When event name and details are rendered, set the id to the next hour
    }
  }

  //Refresh the calendar every day. If Mon (1) is not the same day as the expiration (2, etc...), it's time to reset the calendar.
  function resetCalendar() {
  var now = new Date().getDay();
  var expiration = localStorage.getItem('expiration');

  if (expiration === now) {
    console.log(expiration);
  } else if (expiration != now) {
    localStorage.clear();
    localStorage.setItem('expiration', now)
  } 
}
  
});











