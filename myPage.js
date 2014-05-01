$(document).ready(function () {
    $('.navButtons').mouseenter(function () {
        $(this).css('background', '#4b4b4b');
        $(this).children('.navtext').css('color', 'white');
    });
    
    $('.navButtons').mouseleave(function () {
        $(this).css('background', 'none');
        $(this).children('.navtext').css('color', 'black');
    });
 //   $('.navtext').mouseenter(function () {
//        $('this').css('color', 'white');
  //  });
    
    
});