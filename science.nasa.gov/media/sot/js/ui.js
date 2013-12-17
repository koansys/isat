/*global Cesium ellipsoid*/
(function () {

    //////////////////////////////////////////
    // UI Button actions

    // reset Window
    document.getElementById('reset_button').onclick = function () {
        window.location.reload();
    };

    // Toggle Instructions Modal.
    document.getElementById('instructions_button').onclick = function () {
        if (document.getElementById('instructions').style.display === 'none' ||  !document.getElementById('instructions').style.display) {
            // document.getElementById('instructions').style.display = 'block';
            document.getElementById('instructions').setAttribute("style", "display:block");
            // document.getElementById('satellite_form').style.display = 'none';
            document.getElementById('satellite_form').setAttribute("style", "display:none");
            // document.getElementById('map_display').style.display = 'none';
            document.getElementById('map_display').setAttribute("style", "display:none");
        }
        else {
            // document.getElementById('instructions').style.display = 'none';
            document.getElementById('instructions').setAttribute("style", "display:none");
        }
    };

    // close Instructions Modal
    document.getElementById('instructions_close').onclick = function () {
        // document.getElementById('instructions').style.display = 'none';
        document.getElementById('instructions').setAttribute("style", "display:none");
    };

    // Toggle Satellite
    document.getElementById('satellite_button').onclick = function () {
        if (document.getElementById('satellite_form').style.display === 'none' ||  !document.getElementById('satellite_form').style.display) {
            // document.getElementById('satellite_form').style.display = 'block';
            document.getElementById('satellite_form').setAttribute("style", "display:block");
            // document.getElementById('map_display').style.display = 'none';
            document.getElementById('map_display').setAttribute("style", "display:none");
            // document.getElementById('instructions').style.display = 'none';
            document.getElementById('instructions').setAttribute("style", "display:none");
        }
        else {
            // document.getElementById('satellite_form').style.display = 'none';
            document.getElementById('satellite_form').setAttribute("style", "display:none");
        }
    };

    // close Satellite Modal
    document.getElementById('satellite_form_close').onclick = function () {
        document.getElementById('satellite_form').setAttribute("style", "display:none");
        // document.getElementById('satellite_form').style.display = 'none';
    };

    // Toggle Map Display Modal
    document.getElementById('display_button').onclick = function () {
        if (document.getElementById('map_display').style.display === 'none' ||  !document.getElementById('map_display').style.display) {
            document.getElementById('map_display').setAttribute("style", "display:block");
            // document.getElementById('map_display').style.display = 'block';
            document.getElementById('satellite_form').setAttribute("style", "display:none");
            // document.getElementById('satellite_form').style.display = 'none';
            document.getElementById('instructions').setAttribute("style", "display:none");
            // document.getElementById('instructions').style.display = 'none';
        }
        else {
            document.getElementById('map_display').setAttribute("style", "display:none");
            // document.getElementById('map_display').style.display = 'none';
        }
    };

    // Close Map Display Modal
    document.getElementById('map_display_close').onclick = function () {
        document.getElementById('map_display').setAttribute("style", "display:none");
        // document.getElementById('map_display').style.display = 'none';
    };

    // Close Satellite Information Modal
    document.getElementById('satellite_display_close').onclick = function () {
        document.getElementById('satellite_display').setAttribute("style", "display:none");
        // document.getElementById('satellite_display').style.display = 'none';
        selectedSatelliteIdx = null;
        PLAY = true;
    };

    // Toggle Fullscreen
    // Browser can exit via its own mechanism, e.g., ESCAPE key.
    // The W3C has living docs but the API is not standardized in browsers yet.
    // https://dvcs.w3.org/hg/fullscreen/raw-file/tip/Overview.html
    document.getElementById('fullscreen_button').onclick = function () {
        var fsEl = document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement;
        var fsExit = document.exitFullscreen || document.mozCancelFullScreen || document.webkitExitFullscreen;
        var el = document.getElementById('wrapper');
        var fsRequest = el.requestFullscreen || el.webkitRequestFullscreen || el.mozRequestFullScreen || el.msRequestFullScreen;
        if (fsEl && fsExit !== 'undefined' && fsExit) {
            fsExit.call(document);
            document.getElementById('wrapper').removeAttribute('style');
        } else {
            if (typeof fsRequest !== 'undefined' && fsRequest) {
                fsRequest.call(el);
                document.getElementById('wrapper').setAttribute("style", "width:100%");
                document.getElementById('wrapper').removeAttribute('background');
            }
        }
        onResize();
    };
}());