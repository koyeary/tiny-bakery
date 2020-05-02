$(document).ready(function() {
    console.log("ready");
    clockUpdate();
    setInterval(clockUpdate, 1000);
    
//Rendering date in "day name, month name + date number, year" format.
    var dateObj = new Date();
    var weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var  day = weekdays[dateObj.getDay()];

    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    var date = dateObj.getDate();   
    var month = months[dateObj.getMonth()];
    var year = dateObj.getUTCFullYear();
    
    var newdate = day + ", " + month + " " + date + ", " + year;

//Populate the h1 element with the rendered date

$("h1").text(newdate);    

//Rendering the current time in Hours:Minutes AM/PM (standard time), populating in "h2" element    

  function clockUpdate() {
    var date = new Date();

  //Function to display the zero when minutes are less than 10
  function addZero(x) {
      if (x < 10) {
        return x = '0' + x;
      } else {
        return x;
      }
    } 

    //translate hours into standard time
    function standardTime(x) {
      if (x > 12) {
        return x = x - 12;
      } else if (x == 0) {
        return x = 12;
      } else {
        return x;
      }
    }
    //display AM or PM 
    function renderMeridiem() {
      if (getTime > 11) {
        return " PM"
      } else {
        return " AM"
      }
    }  

    var getTime = date.getHours();
    var hour = /* addZero */(standardTime(getTime));
    var minute = addZero(date.getMinutes());
    var xm = renderMeridiem();

    $('h2').text(hour + ':' + minute +  xm );
  
}

//this is code for the modal window
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = $("#myBtn");

// Get the <span> element that closes the modal
var span = $("span");

// When the user clicks on the button, open the modal
/* btn.onclick = function() {
  modal.style.display = "block";
} */
btn.click(function() {
  modal.style.display = "block";
})

// When the user clicks on <span> (x), close the modal
span.click(function() {
  modal.style.display = "none";
}) 

// When the user clicks anywhere outside of the modal, close it
 $(window).click(function(e) {
 if (e.target == modal) {
    modal.style.display = "none";
  }})

//When we hit the submit button, the form input is stored in local storage.
$("#add-event").on("click", function(event) {
  event.preventDefault();
  var newEvent = [];

  var eventTime = $("#event-time").val().trim();
  var eventName = $("#event-name").val().trim();
  var eventDetails = $("#event-details").val().trim();

  var storedEvent = newEvent.push(eventName, eventTime, eventDetails);
  console.log(storedEvent);
  //clear the array variable after every entry to prevent repetition.
  var newEvent = [];
 /*  for (var i = 0; i < newEvent.length; i++) {
    var eventInfo = newEvent[i];
    $("") */
    //get field by boolean newEvent[0] = 
    //
    
  })
})

/* some */;

/* }); */

      