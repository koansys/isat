#!/bin/bash
CURRENT_DIR=`pwd`
mkdir science.nasa.gov/media/sot/js
mkdir science.nasa.gov/media/sot/cesium
mkdir science.nasa.gov/media/sot/images
mkdir science.nasa.gov/media/sot/css
mkdir science.nasa.gov/media/sot/tle
cp -r $CURRENT_DIR/js/isat.min.js science.nasa.gov/media/sot/js/isat.min.js
cp -r $CURRENT_DIR/viz/cesium/* science.nasa.gov/media/sot/cesium
cp -r $CURRENT_DIR/viz/Images/* science.nasa.gov/media/sot/images
cp -r $CURRENT_DIR/viz/static/css/* science.nasa.gov/media/sot/css
cp -r $CURRENT_DIR/viz/static/images/* science.nasa.gov/media/sot/images
cp -r $CURRENT_DIR/viz/static/js/* science.nasa.gov/media/sot/js
cp -r $CURRENT_DIR/viz/tle/* science.nasa.gov/media/sot/tle
cp $CURRENT_DIR/viz/index.js science.nasa.gov/media/sot/js/index.js
cp $CURRENT_DIR/viz/index.min.js science.nasa.gov/media/sot/js/index.min.js
cp $CURRENT_DIR/viz/index_crippled.js science.nasa.gov/media/sot/js/index_crippled.js
cp $CURRENT_DIR/viz/index_crippled.min.js science.nasa.gov/media/sot/js/index_crippled.min.js
cp $CURRENT_DIR/viz/tle.js science.nasa.gov/media/sot/js/tle.js
cp $CURRENT_DIR/science-sats/NASA-Satellites-for-SkyWatch.csv science.nasa.gov/media/sot/tle/NASA-Satellites-for-SkyWatch.csv
cp $CURRENT_DIR/science-sats/create_tle_files.py science.nasa.gov/media/sot/tle/create_tle_files.py