$(document).ready(() => {
    $('.calendarView').show();
    $('.listView').hide();

    $('.listToggle').on('click',()=> {
      $('.listView').show('slow','linear');
      $('.calendarView').hide();
    });

    $('.calendarToggle').on('click', () => {
      $('.calendarView').show('fast');
      $('.listView').hide('');
    });
});
