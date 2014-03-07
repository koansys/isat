#!/bin/bash
CURRENT_DIR=`pwd`
rm -fr isat
echo 'removed current files'
mkdir isat
mkdir isat/js
echo 'make folder for javascript'
mkdir isat/cesium
echo 'make folder for Cesium'
mkdir isat/images
echo 'make folder for images'
mkdir isat/css
echo 'make folder for css'
cp -r $CURRENT_DIR/science.nasa.gov/media/sot/cesium/* isat/cesium
echo 'copied Cesium over'
cp -r $CURRENT_DIR/science.nasa.gov/media/sot/css/* isat/css
echo 'copied css over'
cp -r $CURRENT_DIR/science.nasa.gov/media/sot/images/* isat/images
echo 'copied images over'
cp -r $CURRENT_DIR/science.nasa.gov/media/sot/js/* isat/js
echo 'copied javascript over'
cp $CURRENT_DIR/science.nasa.gov/index.html isat/index.html
echo 'copied index.html over'

perl -p -i -e 's|media/sot|/media/sot\g' index.html js/index.js js/modernizr_load.js
