//this is the toggle for the schedule page that changes the view of the schedule
$(document).ready(() => {
  //initial page view
    $('.calendarView').show();
    $('.listView').hide();
    $('.calendarToggle').css('color', '#5bd8c8');
    //shows list view
    $('.listToggle').on('click',()=> {
      $('.listView').show('fast','linear');
      $('.listToggle').css('color', '#5bd8c8');
      $('.calendarToggle').css('color', 'black');
      $('.calendarView').hide();
    });
    //shows calendar
    $('.calendarToggle').on('click', () => {
      $('.calendarView').show('slow');
      $('.calendarToggle').css('color', '#5bd8c8');
      $('.listToggle').css('color', 'black');
      $('.listView').hide();
    });
});
