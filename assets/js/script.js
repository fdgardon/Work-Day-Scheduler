

var currentDay = document.getElementById("currentDay")

$(function () {
  $('#currentDay').text(dayjs().format('dddd, MMMM D, YYYY'))
} );


$(document).ready(function () {

  $('.saveBtn').on('click', function () {

    var value = $(this).siblings('.textContent').val();
    var time = $(this).parent().attr('id');


    localStorage.setItem(time, value);
  })});



  