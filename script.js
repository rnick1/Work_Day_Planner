$(document).ready(function() {

    // Date and time that updates thanks to moment.js:
    $('#currentDay').text(moment().format('MMMM Do YYYY, h:mm a'));

    // Below is supposed to take what the user puts into the textarea and put it into local storage. 
    var textArea = document.querySelector('.textarea');
    var savedText = [];
    var localStorageContent = localStorage.getItem('savedText');

    if (localStorageContent !==null) {
        savedText = JSON.parse(localStorageContent); 
    };

    $('.saveBtn').on('click', function(event) {
        
        var text = $(this).parent().siblings('td').children('textarea').val();
        console.log(text);
        
        var timeSlot = $(this).parent().siblings('th').val();
        console.log(timeSlot);
        
        var userInput = {
            Text: text,
            Time: timeSlot, 
        };

        savedText.push(userInput);
        event.preventDefault();
        localStorage.setItem('savedText', JSON.stringify(savedText));
        displayText();
    });

    function displayText() {
        textArea.setAttribute('style', 'display: none');
        for (var i = 0; i < savedText.length; i++) {
            var textItem = savedText[i].Text;
            var textTime = savedText[i].Time;
            var scheduleItem = document.createElement('p');
            scheduleItem.textContent = textItem;
            // textArea.append(scheduleItem);
        };
    }
});