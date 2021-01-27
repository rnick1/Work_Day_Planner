$(document).ready(function() {

    $('#currentDay').text(moment().format('MMMM Do YYYY, h:mm a'));

    var textArea9 = document.querySelector('#nineText');
    var savedText9 = [];
    var localStorageContent = localStorage.getItem('savedText9');
    textArea9.textContent = JSON.parse(localStorageContent);

    $('#save9').on('click', function(event) {
        var text = $(this).parent().siblings('td').children('textarea').val();
        var userInput = text;
        savedText9.push(userInput);
        event.preventDefault();
        localStorage.setItem('savedText9', JSON.stringify(savedText9));
    });

    var textArea10 = document.querySelector('#tenText');
    var savedText10 = [];
    var localStorageContent = localStorage.getItem('savedText10');
    textArea10.textContent = JSON.parse(localStorageContent);

    $('#save10').on('click', function(event) {
        var text = $(this).parent().siblings('td').children('textarea').val();
        var userInput = text;
        savedText10.push(userInput);
        event.preventDefault();
        localStorage.setItem('savedText10', JSON.stringify(savedText10));
    });

    var textArea11 = document.querySelector('#elevenText');
    var savedText11 = [];
    var localStorageContent = localStorage.getItem('savedText11');
    textArea11.textContent = JSON.parse(localStorageContent);

    $('#save11').on('click', function(event) {
        var text = $(this).parent().siblings('td').children('textarea').val();
        var userInput = text;
        savedText11.push(userInput);
        event.preventDefault();
        localStorage.setItem('savedText11', JSON.stringify(savedText11));
    });

    var textArea12 = document.querySelector('#twelveText');
    var savedText12 = [];
    var localStorageContent = localStorage.getItem('savedText12');
    textArea12.textContent = JSON.parse(localStorageContent);

    $('#save12').on('click', function(event) {
        var text = $(this).parent().siblings('td').children('textarea').val();
        var userInput = text;
        savedText12.push(userInput);
        event.preventDefault();
        localStorage.setItem('savedText12', JSON.stringify(savedText12));
    });

    var textArea1 = document.querySelector('#oneText');
    var savedText1 = [];
    var localStorageContent = localStorage.getItem('savedText1');
    textArea1.textContent = JSON.parse(localStorageContent);

    $('#save1').on('click', function(event) {
        var text = $(this).parent().siblings('td').children('textarea').val();
        var userInput = text;
        savedText1.push(userInput);
        event.preventDefault();
        localStorage.setItem('savedText1', JSON.stringify(savedText1));
    });    
    
    var textArea2 = document.querySelector('#twoText');
    var savedText2 = [];
    var localStorageContent = localStorage.getItem('savedText2');
    textArea2.textContent = JSON.parse(localStorageContent);

    $('#save2').on('click', function(event) {
        var text = $(this).parent().siblings('td').children('textarea').val();
        var userInput = text;
        savedText2.push(userInput);
        event.preventDefault();
        localStorage.setItem('savedText2', JSON.stringify(savedText2));
    });    
    
    var textArea3 = document.querySelector('#threeText');
    var savedText3 = [];
    var localStorageContent = localStorage.getItem('savedText3');
    textArea3.textContent = JSON.parse(localStorageContent);

    $('#save3').on('click', function(event) {
        var text = $(this).parent().siblings('td').children('textarea').val();
        var userInput = text;
        savedText3.push(userInput);
        event.preventDefault();
        localStorage.setItem('savedText3', JSON.stringify(savedText3));
    });    
    
    var textArea4 = document.querySelector('#fourText');
    var savedText4 = [];
    var localStorageContent = localStorage.getItem('savedText4');
    textArea4.textContent = JSON.parse(localStorageContent);

    $('#save4').on('click', function(event) {
        var text = $(this).parent().siblings('td').children('textarea').val();
        var userInput = text;
        savedText4.push(userInput);
        event.preventDefault();
        localStorage.setItem('savedText4', JSON.stringify(savedText4));
    });    
    
    var textArea5 = document.querySelector('#fiveText');
    var savedText5 = [];
    var localStorageContent = localStorage.getItem('savedText5');
    textArea5.textContent = JSON.parse(localStorageContent);

    $('#save5').on('click', function(event) {
        var text = $(this).parent().siblings('td').children('textarea').val();
        var userInput = text;
        savedText5.push(userInput);
        event.preventDefault();
        localStorage.setItem('savedText5', JSON.stringify(savedText5));
    });
});

// If the current time is prior to the time listed in the time slot, then the time slot and 
// all time slots that come after it must be colored green.
// If the current time is equal to a time listed in a time slot, then that time slot should be
// colored red.
// If there are past time slots, then they must be colored grey.