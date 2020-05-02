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


//Clicking a time-block opens a modal.

// Get the modal
var modal = $("#myModal");
$("td").focusin(function(){
  modal.css('display', 'block');
});

// When the user clicks on <span> (x), close the modal
$("span").focusin(function(){
  modal.css('display', 'none');
});

//figure out how to close modal when you click anywhere. Not working




  $("#add-event").on("click", function(event) {
  event.preventDefault();
  //declare an empty array to eliminate repetition
  var newEvent = [];

  var eventHour = $("#event-hour").val().trim();
  var eventMinutes = $("#event-minutes").val().trim(); 
  var eventName = $("#event-name").val().trim();
  var eventDetails = $("#event-details").val().trim();

  newEvent.push(eventHour, eventMinutes, eventName, eventDetails);
  console.log(newEvent);

 /*  var entryString = newEvent.join(",");
  console.log(entryString); */
  $("td.event").text(newEvent[2] + " " + newEvent[3])
  });
   
  //} 



     
});

      