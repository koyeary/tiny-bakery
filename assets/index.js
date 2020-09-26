$(document).ready(function () {

  console.log("ready");
  setTimeout(setClock());

  //Initialize material components
  $('.collapsible').collapsible();

  //Render the current date and time in the header
  function setClock() {
    var currentTime = moment().format('LLLL');
    $("h2").text(currentTime);
  }

  function codeTime() {
    //Get the current hour
    var currentHour = moment().hours();
    console.log(currentHour);
    var calendarHour = $('#8');
    console.log(calendarHour);

    $('li').each( function() {
      var calendarHour = parseInt($(this).attr('value'));
      var header = $('.collapsible-header');
      if (currentHour > calendarHour) {
        header.addClass('teal');
      }
    });
   /*  $('.collapsible-header').each(function () {
      var calendarHour = parseInt($(this).attr('id'));

      if (calendarHour > currentHour) {
        $(this).addClass('teal accent-3');
      } else if (calendarHour < currentHour) {
        $(this).addClass('teal lighten-5')
      } else if (calendarHour === currentHour) {
        $(this).addClass('text-darken-2 z-depth-3');
      }

    }); */
  }

  codeTime();

  /*   
  
  
    //Rendering date in "day name, month name + date number, year" format.
    var dateObj = new Date();
    var weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var day = weekdays[dateObj.getDay()];
  
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
  
      /* function colorCode() {
        if (getTime > 
      } 
  
      var getTime = date.getHours();
      var hour = standardTime(getTime);
      var minute = addZero(date.getMinutes());
      var xm = renderMeridiem();
  
      $('h2').text(hour + ':' + minute + xm);
  
    }
  
  
    // Clicking on a time-box retrieves the active element and opens a modal
    var modal = $("#myModal");
    $("tr").focusin(function () {
      modal.css('display', 'block');
      //store active element in a variable so that it can be used to grab the element id  
      var time = $(document.activeElement).attr('id');
  
      //clicking on span element closes the modal
      $("span").on("click", function() {
        modal.css('display', 'none');
      }) 
  
      //the form is here
      $("submit").on("click", function (event) {
        event.preventDefault();
        //save input values
        var task = $("#event-name").val().trim();
        var detail = $("#event-details").val().trim();
        //use time variable to write attribute
        var id = "td#" + time;
        //the task object stores input variables
        var entries = {
          "id": id,
          "task": task,
          "details": detail,
          "time": time
        }
  
         localStorage.setItem("entries", JSON.stringify(entries)); 
        localStorage.setItem("tasks", JSON.stringify(task, detail, time));
  
        var myString = $(entries.id);
        //Insert form inputs into the selected timebox
        myString.append("<p>" + entries.task + "<br>" + entries.details + "</p>");
  
  
  
  
      });
  
     
      function loadTasks() {
        var tasks = JSON.parse(localStorage.getItem("tasks"));
        if (tasks != null) {
          for (let i = 0; i < tasks.length; i++) {
            var id = "td#" + time;
            var htmlString = ("<p>" + tasks.task + "<br>" + tasks.details + "</p>");
            $(id).append(htmlString);
          }
        }
      }
   
  
     loadTasks(); 
  
    }); */

});





