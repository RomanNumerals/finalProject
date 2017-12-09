$(document).ready(() => {
    $('.calendarView').show();
    $('.listView').hide();
    $('.calendarToggle').css('color', '#5bd8c8');

    $('.listToggle').on('click',()=> {
      $('.listView').show('fast','linear');
      $('.listToggle').css('color', '#5bd8c8');
      $('.calendarToggle').css('color', 'black');
      $('.calendarView').hide();
    });

    $('.calendarToggle').on('click', () => {
      $('.calendarView').show('slow');
      $('.calendarToggle').css('color', '#5bd8c8');
      $('.listToggle').css('color', 'black');
      $('.listView').hide();
    });
});
