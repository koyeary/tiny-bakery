$(document).ready(function () {
  //Initialize material components
  $('.collapsible').collapsible();

  //Initialize the calendar
  setClock();
  loadCalendar();
  codeid();

  //Set the interval to upddate clock and corresponding color codes
  setInterval(codeid, 30000);

  function codeid() {
    //Set the clock and idcode to update at the same interval
    setClock();
    //Find the current id
    var currentHour = moment().hours();

    $('li').each(function () {
      var calendarHour = parseInt($(this).attr('value'));
      if (currentHour > calendarHour) {
        $(`#header-${calendarHour}`).addClass('teal lighten-5'); //Event is in the past
        $(`#badge-${calendarHour}`).toggleClass('black-text');
      } else if (currentHour < calendarHour) {
        $(`#header-${calendarHour}`).addClass('teal'); //Event is in the future
        $(`#badge-${calendarHour}`).toggleClass('white-text');
      } else if (currentHour === calendarHour) {
        $(`#header-${calendarHour}`).addClass('white');
        $(`#badge-${calendarHour}`).toggleClass('black-text');
      }
    });
  }

  //Render the current date and id in the header
  function setClock() {
    var currentid = moment().format('LLLL');
    $("h3").text(currentid);
  }

  //Save input fields to local storage
  $('.btn').on('click', function () {
    var id = this.id;
    var eventName = $(`#name-${id}`).val();
    var details = $(`#details-${id}`).val();

    localStorage.setItem(`name-${id}`, eventName);
    localStorage.setItem(`details-${id}`, details);
    loadCalendar(); //Reload page and populate headers
  });

  //Manually reset the calendar
  $('.btn-large').on('click', function() {
    localStorage.clear();
    localStorage.setItem('expiration', now);
    location.reload();
  });

  //Manually reset a single event
  $('.reset').on('click', function() {
    var id = this.id;
    localStorage.removeItem(`name-${id}`, this.value)
    localStorage.removeItem(`details-${id}`, this.value)
    location.reload();
  }); 

  //Daily automated reset. If Mon (1) is not the same day as the expiration in local storage, reset the calendar.
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
        //reset card panel to event details with an option to reset and write a new event
        $(`#body-${id}`).html(`<h5>${savedName}</h5><blockquote>${savedDetails}</blockquote><div class='card-action center-align'><button class='btn waves-effect waves-light reset' id='${id}'>Reset</button></div>`);
      }
      id += 1; //When event name and details are rendered, set the id to the next hour
    }
  }


});











