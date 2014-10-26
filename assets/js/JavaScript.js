$(document).ready(function () {
    $("#projects").hide();
    $("#about").hide();
    $("#contact").hide();

    $('#home').mousewheel(function (event, delta) {
        event.preventDefault(); // if you want to prevent the window from scrolling

        if (delta < 0) {
            $(this).hide();
            $("#projects").show();


        }
        else {
            "";


        }
    });

    $('#projects').mousewheel(function (event, delta) {
        event.preventDefault(); // if you want to prevent the window from scrolling

        if (delta < 0) {
            $(this).hide();
            $("#about").show();

        }
        else {

            $(this).hide();
            $("#home").show();


        }
    });

    $('#about').mousewheel(function (event, delta) {
        event.preventDefault(); // if you want to prevent the window from scrolling

        if (delta < 0) {

            $(this).hide();
            $("#contact").show();


        }
        else {

            $(this).hide();
            $("#projects").show();


        }
    });

    $('#contact').mousewheel(function (event, delta) {
        event.preventDefault(); // if you want to prevent the window from scrolling

        if (delta < 0) {


            $(this).hide();
            $('#home').show();

        }
        else {

            $(this).hide();
            $('#about').show();


        }
    });





});
