$(document).ready(function () {
    $('.navButtons').mouseenter(function () {
        $(this).css('background', '#4b4b4b');
        $(this).children('.navtext').css('color', '#66ff66');
        $(this).children('.submenu').slideToggle('fast');
       
    });
    
    $('.navButtons').mouseleave(function () {
        $(this).css('background', 'none');
        $(this).children('.navtext').css('color', 'black');
        $(this).children('.submenu').slideToggle('fast');
      // $(this).children('.submenu .submenuElem').css('background', '#4b4b4b');
    });

    $('.submenuElem').mouseenter(function () {
        $(this).css('background', 'green');
        $(this).css('color', 'white');
        
    });
    
    $('.submenuElem').mouseleave(function () {
        $(this).css('background', '#4b4b4b');
        $(this).css('color', '#66ff66');
    });
    
});