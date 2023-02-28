
var currentDay = document.getElementById("currentDay")

$(function () {
  $('#currentDay').text(dayjs().format('dddd, MMMM D, YYYY'))
} );


$(document).ready(function () {
  // saveBtn click listener 
  $(".saveBtn").on("click", function () {
      // Get nearby values of the description in JQuery
      var text = $(this).siblings(".textContent").val();
      var time = $(this).parent().attr("id");

      // Save text in local storage
      localStorage.setItem(time, text);
      console.log(localStorage)

      

  })
  //jQuery storage 
  $( ".time-block" ).each(function( ) {
    console.log($(this).attr("id"));
    var id = $(this).attr("id")
    $(this).children(".textContent").val(localStorage.getItem(id))
    
  });
})