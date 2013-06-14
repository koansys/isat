#!/bin/bash
CURRENT_DIR=`pwd`
rm -rf /repfiles/nasascience/media/sot/*
mkdir /repfiles/nasascience/media/sot/js
mkdir /repfiles/nasascience/media/sot/cesium
mkdir /repfiles/nasascience/media/sot/images
mkdir /repfiles/nasascience/media/sot/css
mkdir /repfiles/nasascience/media/sot/tle
cp -r $CURRENT_DIR/js/isat.min.js /repfiles/nasascience/media/sot/js/isat.min.js
cp -r $CURRENT_DIR/viz/cesium/* /repfiles/nasascience/media/sot/cesium
cp -r $CURRENT_DIR/viz/Images/* /repfiles/nasascience/media/sot/images
cp -r $CURRENT_DIR/viz/static/css/* /repfiles/nasascience/media/sot/css
cp -r $CURRENT_DIR/viz/static/images/* /repfiles/nasascience/media/sot/images
cp -r $CURRENT_DIR/viz/static/js/* /repfiles/nasascience/media/sot/js
cp -r $CURRENT_DIR/viz/tle/* /repfiles/nasascience/media/sot/tle
cp $CURRENT_DIR/viz/index.js /repfiles/nasascience/media/sot/js/index.js
cp $CURRENT_DIR/viz/index.min.js /repfiles/nasascience/media/sot/js/index.min.js
cp $CURRENT_DIR/viz/index_crippled.js /repfiles/nasascience/media/sot/js/index_crippled.js
cp $CURRENT_DIR/viz/index_crippled.min.js /repfiles/nasascience/media/sot/js/index_crippled.min.js
cp $CURRENT_DIR/viz/tle.js /repfiles/nasascience/media/sot/js/tle.js
cp $CURRENT_DIR/science-sats/NASA-Satellites-for-SkyWatch.csv /repfiles/nasascience/media/sot/tle/NASA-Satellites-for-SkyWatch.csv
cp $CURRENT_DIR/science-sats/create_tle_files.py /repfiles/nasascience/media/sot/tle/create_tle_files.py