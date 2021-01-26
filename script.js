$(document).ready(function() {

    $('#currentDay').text(moment().format('MMMM Do YYYY, h:mm a'));

    
    
    var textArea9 = document.querySelector('#9text');
    var savedText9 = [];
    var localStorageContent = localStorage.getItem('savedText9');
    textArea9.textContent = JSON.parse(localStorageContent);

    $('#save9').on('click', function(event) {
        var text = $(this).parent().siblings('td').children('9text').val();
        var userInput = text;
        savedText9.push(userInput);
        event.preventDefault();
        localStorage.setItem('savedText9', JSON.stringify(savedText9));
    });

// 1. Make it so event handlers are grabbing the save button id's instead of class.
// 2. Change textArea var to id's.
// 3. Make savedText array unique for each button.
// 4. Make sure that the localStorageContent var is grabbing from the updated savedText.
// 5. Update textArea.textContent to whatever textArea is being used.
// 6. Update savedText.
// 7. Update savedText in the localStorage.setItem line.
// 8. Test.



});

