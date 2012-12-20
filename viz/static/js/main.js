jQuery(function ($) {
    // Load dialog on page load
    //$('#basic-modal-content').modal();

    // Load dialog on click
    $('#basic-modal1 .modal').click(function (e) {
        $('#instructions').modal();

        return false;
    });

    $('#basic-modal2 .modal').click(function (e) {
        $('#statistics').modal();

        return false;
    });

});

document.getElementById("show_instructions").onclick = function () {
        $("#instructions").show();
        $("#nav_buttons").hide();
    };

document.getElementById("hide_instructions").onclick = function () {
        $("#nav_buttons").show();
        $("#instructions").hide();
    };