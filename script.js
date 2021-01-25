$(document).ready(function() {

    // Date and time that updates thanks to moment.js:
    $("#currentDay").text(moment().format('MMMM Do YYYY, h:mm a'));

    // Below is supposed to take what the user puts into the textarea and put it into local storage. After it is in local storage, 
    // it is supposed to replace the text area with a para tag with the content in it.
    var textArea = document.querySelector(".textarea");
    var savedText = [];
    var localStorageContent = localStorage.getItem("savedText");

    if (localStorageContent !==null) {
        savedText = JSON.parse(localStorageContent); 
    }

    $(".saveBtn").on('click', function(event) {
        var text = $(this).parent().siblings('td').children('textarea').val();
        console.log(text);
        var userInput = {
            Text: text,
        };
        savedText.push(userInput);
        event.preventDefault();
        localStorage.setItem("savedText", JSON.stringify(savedText));
        displayText();
    });

    function displayText() {
        textArea.setAttribute('style', "display: none");
        for (var i = 0; i < savedText.length; i++);
            var textItem = savedText[i].Text;
            var scheduleItem = document.createElement('p');
            scheduleItem.textContent = textItem;
            textArea.append(scheduledItem);
        };
});