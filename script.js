$(document).ready(function() {

    $('#currentDay').text(moment().format('MMMM Do YYYY, h:mm a'));
    var currentHour = moment().format('kk');

    $('textarea').each(function(i) {
        var hour = i + 9;
    
        if (hour < currentHour) {
            $(this).addClass('past');
            $(this).attr("disabled", "");
        }
        else if (hour === currentHour) {
            $(this).addClass('present');
            $(this).attr("color", "blue");

        }
        else {
            $(this).addClass('future');
        };
    });
    
    $('#timetable').on('click', 'button', function(event) {
        event.preventDefault();
        var text = $(this).parent().siblings('td').children('textarea').val();
        var userInput = text;
        var id = $(this).attr("id");
        localStorage.setItem(id, userInput);
    })

    var allKeys = ["save9", "save10", "save11", "save12", "save1", "save2", "save3", "save4", "save5"];

    for(var i = 0; i < allKeys.length; i++) {
        var localStorageContent = localStorage.getItem(allKeys[i]);

        if(localStorageContent === null) {
            continue
        }
        var text = localStorageContent
        $('#' + allKeys[i]).parent().siblings('td').children('textarea').val(text);   
    }
});