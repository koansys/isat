/*global document, Cesium, Image*/
(function () {
    //from Sandbox.js
    "use strict";
    var canvas = document.getElementById('glCanvas');
    var scene = new Cesium.Scene(canvas);
    var primitives = scene.getPrimitives();
    var ellipsoid = Cesium.Ellipsoid.WGS84;

    var bing = new Cesium.BingMapsTileProvider({
        server : 'dev.virtualearth.net',
        mapStyle : Cesium.BingMapsStyle.AERIAL,
        // Some versions of Safari support WebGL, but don't correctly implement
        // cross-origin image loading, so we need to load Bing imagery using a proxy.
        proxy : Cesium.FeatureDetection.supportsCrossOriginImagery() ? undefined : new Cesium.DefaultProxy('/Proxy.ashx')
    });

    var cb = new Cesium.CentralBody(ellipsoid);
    cb.dayTileProvider      = bing;
    cb.nightImageSource     = 'Images/land_ocean_ice_lights_2048.jpg';
    cb.specularMapSource    = 'Images/earthspec1k.jpg';
    cb.cloudsMapSource      = 'Images/earthcloudmaptrans.jpg';
    cb.bumpMapSource        = 'Images/earthbump1k.jpg';
    cb.showSkyAtmosphere    = true;
    cb.showGroundAtmosphere = true;

    primitives.setCentralBody(cb);

    scene.getCamera().getControllers().addCentralBody();
    scene.getCamera().getControllers().get(0).spindleController.constrainedAxis = Cesium.Cartesian3.UNIT_Z;

//    scene.getCamera().frustum.near = 100.0;

    scene.getCamera().lookAt({
        eye : new Cesium.Cartesian3(2203128.2853925996, -7504680.128731707, 5615591.201449535),
        target : Cesium.Cartesian3.ZERO,
        up : new Cesium.Cartesian3(-0.1642824655609347, 0.5596076102188919, 0.8123118822806428)
    });

    function addBillboardsInReferenceframe(scene, ellipsoid) {
        var image = new Image();
        image.onload = function () {
            var billboards = new Cesium.BillboardCollection();
            var textureAtlas = scene.getContext().createTextureAtlas({image: image});
            billboards.setTextureAtlas(textureAtlas);
            // Must be defining center where labels will be referenced to,
            // I assume on earth surface.
            // We presumably will want center of the earth for satellites,
            // not centered about some earth surface location.
            // DC: 38.8900 N, 77.0300 W
            // ORIG: -75.59777, 40.03883));
            var center = ellipsoid.cartographicToCartesian(
                Cesium.Cartographic.fromDegrees(-77.141209,38.885580)); // WBG Lon,Lat
            billboards.modelMatrix = Cesium.Transforms.eastNorthUpToFixedFrame(center);
            billboards.add({ imageIndex : 0, position : new Cesium.Cartesian3(0.0, 0.0, 0.0) }); // center
            billboards.add({ imageIndex : 0, position : new Cesium.Cartesian3(1000000.0, 0.0, 0.0) }); // east
            billboards.add({ imageIndex : 0, position : new Cesium.Cartesian3(0.0, 1000000.0, 0.0) }); // north
            billboards.add({ imageIndex : 0, position : new Cesium.Cartesian3(0.0, 0.0, 1000000.0) }); // up
            scene.getPrimitives().add(billboards);
        };
        image.src = 'Images/Satellite.png';
    }
    addBillboardsInReferenceframe(scene, ellipsoid);

    function addLabelsInReferenceFrame(scene, ellipsoid) {
        //Sandcastle.declare(addLabelsInReferenceFrame);  // For highlighting in Sandcastle.
        var center = ellipsoid.cartographicToCartesian(
            Cesium.Cartographic.fromDegrees(-77.141209,38.885580)); // WBG Lon,Lat
        var labels = new Cesium.LabelCollection(undefined);
        labels.modelMatrix = Cesium.Transforms.eastNorthUpToFixedFrame(center);
        labels.add({
            position : new Cesium.Cartesian3(0.0, 0.0, 0.0),
            text     : 'WBG'
        });
        labels.add({
            position : new Cesium.Cartesian3(1000000.0, 0.0, 0.0),
            text     : 'East'
        });
        labels.add({
            position : new Cesium.Cartesian3(0.0, 1000000.0, 0.0),
            text     : 'North'
        });
        labels.add({
            position : new Cesium.Cartesian3(0.0, 0.0, 1000000.0),
            text     : 'Above'
        });
        scene.getPrimitives().add(labels);
    }
    addLabelsInReferenceFrame(scene, ellipsoid);

    (function tick() {
        scene.render();
        Cesium.requestAnimationFrame(tick);
    }());
}());
