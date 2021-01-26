$(document).ready(function() {

    // Date and time that updates thanks to moment.js:
    $('#currentDay').text(moment().format('MMMM Do YYYY, h:mm a'));

    // Everything below this is supposed to take what the user puts into the textarea and put it into local storage. 
    var textArea = document.querySelector('.textarea');
    var savedText = [];
    var localStorageContent = localStorage.getItem('savedText');

    textArea.textContent = JSON.parse(localStorageContent);

    // if (localStorageContent !== null) {
    //     savedText = JSON.parse(localStorageContent); 
    // };
    // console.log(localStorageContent);

    $('.saveBtn').on('click', function(event) {
        var text = $(this).parent().siblings('td').children('textarea').val();
        // console.log(text);
        // var timeSlot = $(this).parent().siblings('th').text();
        // console.log(timeSlot);
        var userInput = text;
            // Time: timeSlot, 

        // console.log(userInput);
        savedText.push(userInput);
        event.preventDefault();
        localStorage.setItem('savedText', JSON.stringify(savedText));
    });

// Everything below this is supposed to take it out of local storage and display it in the text areas.
//     function displayText() {
//         for (var i = 0; i < savedText.length; i++) {
//             var textArea = savedText[i].Text;
//         };
//     }

// displayText();

});