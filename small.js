/*global document, Cesium, Image*/
(function () {
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
    // How do we tell if we can't get Bing, and substitute flat map?
    cb.dayTileProvider      = bing;
    // is this map right? seamless with the night view? 
    //cb.dayTileProvider      = new Cesium.SingleTileProvider('Images/NE2_50M_SR_W_4096.jpg');

    cb.nightImageSource     = 'Images/land_ocean_ice_lights_2048.jpg';
    cb.specularMapSource    = 'Images/earthspec1k.jpg';
//    cb.cloudsMapSource      = 'Images/earthcloudmaptrans.jpg';
    cb.bumpMapSource        = 'Images/earthbump1k.jpg';
    cb.showSkyAtmosphere    = true;
//    cb.showGroundAtmosphere = true;

    primitives.setCentralBody(cb);

    scene.getCamera().getControllers().addCentralBody();
    scene.getCamera().getControllers().get(0).spindleController.constrainedAxis = Cesium.Cartesian3.UNIT_Z;

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
            var center = ellipsoid.cartographicToCartesian(
                Cesium.Cartographic.fromDegrees(-77.141209,38.885580)); // WBG Lon,Lat
            billboards.modelMatrix = Cesium.Transforms.eastNorthUpToFixedFrame(center);
            //billboards.add({ imageIndex : 0, position : new Cesium.Cartesian3(0.0, 0.0, 0.0) }); // center
            billboards.add({ imageIndex : 0, position : new Cesium.Cartesian3(1000000.0, 0.0, 0.0) }); // east
            billboards.add({ imageIndex : 0, position : new Cesium.Cartesian3(0.0, 1000000.0, 0.0) }); // north
            billboards.add({ imageIndex : 0, position : new Cesium.Cartesian3(0.0, 0.0, 1000000.0) }); // up
            scene.getPrimitives().add(billboards);
        };
        image.src = 'Images/Satellite.png';
    }
    addBillboardsInReferenceframe(scene, ellipsoid);

    function addWBGBillboardsInReferenceframe(scene, ellipsoid) {
        var image = new Image();
        image.onload = function () {
            var billboards = new Cesium.BillboardCollection();
            var textureAtlas = scene.getContext().createTextureAtlas({image: image});
            billboards.setTextureAtlas(textureAtlas);
            var center = ellipsoid.cartographicToCartesian(
                Cesium.Cartographic.fromDegrees(-77.141209,38.885580)); // WBG Lon,Lat
            billboards.modelMatrix = Cesium.Transforms.eastNorthUpToFixedFrame(center);
            billboards.add({ imageIndex : 0, position : new Cesium.Cartesian3(0.0, 0.0, 0.0) }); // center
            scene.getPrimitives().add(billboards);
        };
        image.src = 'Images/icon_beer.gif';
    }
    addWBGBillboardsInReferenceframe(scene, ellipsoid);

    // SAC in South Africa
    function addSACInReferenceframe(scene, ellipsoid) {
        var image = new Image();
        image.onload = function () {
            var billboards = new Cesium.BillboardCollection();
            var textureAtlas = scene.getContext().createTextureAtlas({image: image});
            billboards.setTextureAtlas(textureAtlas);
            var center = ellipsoid.cartographicToCartesian(
                Cesium.Cartographic.fromDegrees(27,-25)); // SAC Lon,Lat
            billboards.modelMatrix = Cesium.Transforms.eastNorthUpToFixedFrame(center);
            billboards.add({ imageIndex : 0, position : new Cesium.Cartesian3(0.0, 0.0, 0.0) }); // center
            scene.getPrimitives().add(billboards);
        };
        image.src = 'Images/facility.gif';
    }
    addSACInReferenceframe(scene, ellipsoid);


    function addLabelsInReferenceFrame(scene, ellipsoid) {
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
