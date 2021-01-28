for(var i = 0; i < something.length;i++) {

}

$("saveBtn").on('click', function(event) {
    event.preventDefault();
    for (var i = 0; i < something.length;i++) {
        localStorage.setItem('hour' + i, JSON.stringify())
    }
})



















$(document).ready(function() {
var currentHour = moment().format('h');
    
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

$(document).ready(function() {

    $('#currentDay').text(moment().format('MMMM Do YYYY, h:mm a'));

    var textArea = document.querySelector('.textarea');
    var savedText = [];
    var localStorageContent = localStorage.getItem('savedText');
    textArea.textContent = JSON.parse(localStorageContent);

    $('.saveBtn').on('click', function(event) {
        var text = $(this).parent().siblings('td').children('textarea').val();
        var userInput = text;
        savedText.push(userInput);
        event.preventDefault();
        localStorage.setItem('savedText', JSON.stringify(savedText));
    });

});

$('.row textarea').each(function(i) {
    var hour = i + 9;

    if (hour < currentHour) {
        $(this).addClass('past');
    }
    else if (hour === currentHour) {
        $(this).addClass('present');
    }
    else {
        $(this).addClass('future');
    }
});