#!/bin/bash
CURRENT_DIR=`pwd`
mkdir /media/sot/js
mkdir /media/sot/cesium
mkdir /media/sot/images
mkdir /media/sot/css
mkdir /media/sot/tle
cp -r $CURRENT_DIR/isat/cesium/* /media/sot/cesium
cp -r $CURRENT_DIR/isat/css/* /media/sot/css
cp -r $CURRENT_DIR/isat/images/* /media/sot/images
cp -r $CURRENT_DIR/isat/js/* /media/sot/js
cp -r $CURRENT_DIR/viz/tle/* /media/sot/tle
cp $CURRENT_DIR/science-sats/create_tle_files.py /media/sot/tle/create_tle_files.py