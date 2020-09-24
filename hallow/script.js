for(var i=1 ; i <=8 ; i++) {
    $('#wrapper').append('<div class="box"></div>')
};


///maybe  an if statement wher if box is clicked img is toggled to the front ???
$(document).ready(function(){
        $('img').click(function(){
            $(this).hide();
        });

    });
// function getRandomColor() {
//     var letters = '0123456789ABCDEF';
//     var color = '#';
//     for (var i = 0; i < 6; i++) {
//         color += letters[Math.floor(Math.random() * 16)]
//     }
//     return color;
// }

// function randomWidth() {
//     var random_number = Math.random() * 150
//     return random_number
// }

// $('.box').hover(function () {
//     $(this).css("background-color", getRandomColor())
//     $(this).css("width", randomWidth() + "px")
// })
