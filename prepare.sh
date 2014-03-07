#!/bin/bash
CURRENT_DIR=`pwd`
rm -fr isat_temp
echo 'removed isat_temp/'
mkdir isat_temp
echo 'make folder for isat_temp'
mkdir isat_temp/js
echo 'make folder for javascript'
mkdir isat_temp/cesium
echo 'make folder for Cesium'
mkdir isat_temp/images
echo 'make folder for images'
mkdir isat_temp/css
echo 'make folder for css'
cp -r $CURRENT_DIR/science.nasa.gov/media/sot/cesium/* isat_temp/cesium
echo 'copied Cesium over'
cp -r $CURRENT_DIR/science.nasa.gov/media/sot/css/* isat_temp/css
echo 'copied css over'
cp -r $CURRENT_DIR/science.nasa.gov/media/sot/images/* isat_temp/images
echo 'copied images over'
cp -r $CURRENT_DIR/science.nasa.gov/media/sot/js/* isat_temp/js
echo 'copied javascript over'
cp $CURRENT_DIR/science.nasa.gov/index.html isat_temp/index.html
echo 'copied index.html over'

perl -p -i -e 's|media/sot|/media/sot|g' isat_temp/index.html isat_temp/js/index.js isat_temp/js/modernizr_load.js
