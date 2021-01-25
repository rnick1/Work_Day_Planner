$(document).ready(function() {

    // Date and time that updates thanks to moment.js:
    $('#currentDay').text(moment().format('MMMM Do YYYY, h:mm a'));

    // Below is supposed to take what the user puts into the textarea and put it into local storage. 
    var textArea = document.querySelector('.textarea');
    var savedText = [];
    console.log(savedText);
    var localStorageContent = localStorage.getItem('savedText');


    if (localStorageContent !== null) {
        savedText = JSON.parse(localStorageContent); 
    };

    $('.saveBtn').on('click', function(event) {
        var text = $(this).parent().siblings('td').children('textarea').val();
        console.log(text);
        var Text9 = document.getElementById('9text');
        var Text10 = document.getElementById('10text');
        var Text11 = document.getElementById('11text');
        var Text12 = document.getElementById('12text');
        var Text1 = document.getElementById('1text');
        var Text2 = document.getElementById('2text');
        var Text3 = document.getElementById('3text');
        var Text4 = document.getElementById('4text');
        var Text5 = document.getElementById('5text');
        var userInput = {
            Text: text,
            Time9: Text9,
            Time10: Text10, 
            Time11: Text11, 
            Time12: Text12, 
            Time1: Text1, 
            Time2: Text2, 
            Time3: Text3, 
            Time4: Text4, 
            Time5: Text5, 
        };
        console.log(userInput);
        savedText.push(userInput);
        event.preventDefault();
        localStorage.setItem('savedText', JSON.stringify(savedText));
        displayText();
    });

    function displayText() {
        for (var i = 0; i < savedText.length; i++) {
            // var textItem = savedText[i].Text;
            // console.log(textItem);
            
            // var storedText = localStorage.getItem('Text');

            // textArea = textContent.Text
        };
    };
});