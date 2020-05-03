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
      } else if (x === 0) {
        return x = 12;
      } else {
        return x;
      }
    }
    //display AM or PM 
    function renderMeridiem() {
      if (getTime > 11) {
        return " PM";
      } else {
        return " AM";
      }
    }  

    var getTime = date.getHours();
    var hour = /* addZero */(standardTime(getTime));
    var minute = addZero(date.getMinutes());
    var xm = renderMeridiem();

    $('h2').text(hour + ':' + minute +  xm );
  
  }


timeSlot = [8, 9, 10, 11, 12, 1, 2, 3, 4, 5]


/* localStorage.setItem('tasks', tasks);
localStorage.setItem('timeSlot', timeSlot); */



//Clicking a time-block opens a modal.

// Get the modal
var modal = $("#myModal");
$("tr").focusin(function(){
  modal.css('display', 'block');
  var time = $(document.activeElement).attr('id');
  /* var timeIndex = time - 8; */
 

  //var array = [];
  
$("#add-event").on("click", function(event) {
  event.preventDefault(); 

  
  var task = $("#event-name").val().trim();
  var detail = $("#event-details").val().trim();
 /*  var id = "'td id=" + timeIndex + "'";  */
  var id = "td#" + time;
 /*  var getNthChild = timeSlot[i]; */
  var tasks = {
    "id" : id,
    "task" : task,
    "details" : detail,
    "time" : time
  }
  localStorage.setItem("tasks", task);
  //declare an empty array to eliminate repetition
  //var newEvent = [];
  console.log("submitted");
  console.log(tasks);

  var myString = $(tasks.id); 

 console.log(myString);
 myString.append("<p>"  + tasks.task + "<br>" + tasks.details + "</p>");
/*  myString.innerHTML("<p>"  + tasks.task + "<br>" + tasks.details + "</p>") */


  
}); 

 });
});

 




//console.log(select); //use this to plug in hour of the time to modal and appends  

// When the user clicks on <span> (x), close the modal

//figure out how to close modal when you click anywhere. Not working



//possible solution: if the div value is attached directly to the onclick event the entry can be easily appended to that value



/* function closeModal() {
  modal.css('display', 'none'
}
 */



      