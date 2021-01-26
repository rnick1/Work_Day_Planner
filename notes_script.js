
$(document).ready(function() {

    $('#currentDay').text(moment().format('MMMM Do YYYY, h:mm a'));


    if (localStorageContent !== null) {
        savedText = JSON.parse(localStorageContent); 
    };

    $('#save9').on('click', function(event) {

    });
});