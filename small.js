(function () {
    //from Sandbox.js
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
    cb.dayTileProvider = bing;
    cb.nightImageSource = 'Images/land_ocean_ice_lights_2048.jpg';
    cb.specularMapSource = 'Images/earthspec1k.jpg';
    cb.cloudsMapSource = 'Images/earthcloudmaptrans.jpg';
    cb.bumpMapSource = 'Images/earthbump1k.jpg';
    cb.showSkyAtmosphere = true;
    cb.showGroundAtmosphere = true;

    primitives.setCentralBody(cb);

    scene.getCamera().getControllers().addCentralBody();
    scene.getCamera().getControllers().get(0).spindleController.constrainedAxis = Cesium.Cartesian3.UNIT_Z;

    scene.getCamera().frustum.near = 100.0;

    scene.getCamera().lookAt({
        eye : new Cesium.Cartesian3(2203128.2853925996, -7504680.128731707, 5615591.201449535),
        target : Cesium.Cartesian3.ZERO,
        up : new Cesium.Cartesian3(-0.1642824655609347, 0.5596076102188919, 0.8123118822806428)
    });

    scene.render();
}());
