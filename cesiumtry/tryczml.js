/*global Cesium, document */
(function () {
    "use strict";
    var simpleBillboard_json = '[\
  {\
    "id":"Headquarters",\
    "position":{\
      "cartesian":[\
        1216469.9357990976,-4736121.71856379,4081386.8856866374\
      ]\
    },\
    "billboard":{\
      "color":{\
        "rgba":[\
          0,255,255,255\
        ]\
      },\
      "horizontalOrigin":"CENTER",\
      "image":"http://localhost/~cshenton/sot/cesiumtry/Images/facility.gif",\
      "scale":1.0,\
      "show":[\
        {\
          "interval":"2012-06-20T16:00:00Z/2012-06-20T16:02:00Z",\
          "boolean":true\
        }\
      ],\
      "verticalOrigin":"CENTER"\
    }\
  }\
]\
';
    var scene = new Cesium.Scene(document.getElementById('canvas'));
    var primitives = scene.getPrimitives();
    var ellipsoid = Cesium.Ellipsoid.WGS84;
    scene.getCamera().getControllers().addCentralBody();
    scene.getCamera().getControllers().get(0).spindleController.constrainedAxis = Cesium.Cartesian3.UNIT_Z;
    scene.getCamera().lookAt({
        eye : new Cesium.Cartesian3(4000000.0, -15000000.0,  10000000.0),
        up : new Cesium.Cartesian3(-0.1642824655609347, 0.5596076102188919, 0.8123118822806428),
        target : Cesium.Cartesian3.ZERO
    });
    var cb = new Cesium.CentralBody(ellipsoid);
    cb.dayTileProvider      = new Cesium.SingleTileProvider('Images/NE2_50M_SR_W_4096.jpg');
    cb.nightImageSource     = 'Images/land_ocean_ice_lights_2048.jpg';
    cb.bumpMapSource        = 'Images/earthbump1k.jpg';
    cb.showSkyAtmosphere    = true;
    primitives.setCentralBody(cb);


    //////////////////////////////////////////////////////////////////////////
    //var czml = JSON.parse($.getJSON('simpleBillboard.czml')); // Unexpected token o
    var czml = JSON.parse(simpleBillboard_json);

    //Create a DynamicObjectCollection for handling the CZML
    var dynamicObjectCollection = new Cesium.DynamicObjectCollection();
    //Create the standard CZML visualizer collection
    var visualizers = Cesium.VisualizerCollection.createCzmlStandardCollection(scene, dynamicObjectCollection);
    //Process the CZML, which populates the collection with DynamicObjects
    Cesium.processCzml(czml, dynamicObjectCollection); // dynamicObjectCollection.processCzml(czml);
    //Figure out the time span of the data
    var availability = dynamicObjectCollection.computeAvailability();
    //Create a Clock object to drive time.
    var clock = new Cesium.Clock(availability.start, availability.stop);

    (function tick() {
        var currentTime = clock.tick();
        document.getElementById('date').textContent = currentTime.toDate();
        //console.log("currentTime=", currentTime);
        visualizers.update(currentTime);

        scene.render();
        Cesium.requestAnimationFrame(tick);
    }());

}());

