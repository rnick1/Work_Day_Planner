$(document).ready(function() {

    $("#currentDay").text(moment().format('MMMM Do YYYY, h:mm a'));

    var textArea = document.querySelector("#textarea");
    var savedText = [];
    var localStorageContent = localStorage.getItem("savedText");

    if (localStorageContent !==null) {
        savedText = JSON.parse(localStorageContent); 
    }

    $("#saveBtn").on('click', function(event) {
        var userInput = {
            Text: textArea.value,
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