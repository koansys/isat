#!/bin/bash
CURRENT_DIR=`pwd`
ISAT_DIR="isat_temp"
rm -fr $ISAT_DIR
echo 'removed $ISAT_DIR/'
mkdir $ISAT_DIR
echo 'make folder for $ISAT_DIR'
mkdir $ISAT_DIR/js
echo 'make folder for javascript'
mkdir $ISAT_DIR/cesium
echo 'make folder for Cesium'
mkdir $ISAT_DIR/images
echo 'make folder for images'
mkdir $ISAT_DIR/css
echo 'make folder for css'
cp -r $CURRENT_DIR/science.nasa.gov/media/sot/cesium/* $ISAT_DIR/cesium
echo 'copied Cesium over'
cp -r $CURRENT_DIR/science.nasa.gov/media/sot/css/* $ISAT_DIR/css
echo 'copied css over'
cp -r $CURRENT_DIR/science.nasa.gov/media/sot/images/* $ISAT_DIR/images
echo 'copied images over'
cp -r $CURRENT_DIR/science.nasa.gov/media/sot/js/* $ISAT_DIR/js
echo 'copied javascript over'
cp $CURRENT_DIR/science.nasa.gov/index.html $ISAT_DIR/index.html
echo 'copied index.html over'

perl -p -i -e 's|media/sot|/media/sot|g' $ISAT_DIR/index.html $ISAT_DIR/js/index.js $ISAT_DIR/js/modernizr_load.js

dt=`date +'%Y%m%d%H%M%S'`

perl -p -i -e "s/v=[0-9]+/$dt/" $ISAT_DIR/js/modernizr_load.js

echo "Use this time stamp: $dt"

rm -rf /repfiles/nasascience/media/sot/js
rm -rf /repfiles/nasascience/media/sot/cesium
rm -rf /repfiles/nasascience/media/sot/images
rm -rf /repfiles/nasascience/media/sot/css

echo 'removed current files'
mkdir /repfiles/nasascience/media/sot/js
echo 'make folder for javascript'
mkdir /repfiles/nasascience/media/sot/cesium
echo 'make folder for Cesium'
mkdir /repfiles/nasascience/media/sot/images
echo 'make folder for images'
mkdir /repfiles/nasascience/media/sot/css
echo 'make folder for css'
cp -r $CURRENT_DIR/$ISAT_DIR/cesium/* /repfiles/nasascience/media/sot/cesium
echo 'copied Cesium over'
cp -r $CURRENT_DIR/$ISAT_DIR/css/* /repfiles/nasascience/media/sot/css
echo 'copied css over'
cp -r $CURRENT_DIR/$ISAT_DIR/images/* /repfiles/nasascience/media/sot/images
echo 'copied images over'
cp -r $CURRENT_DIR/$ISAT_DIR/js/* /repfiles/nasascience/media/sot/js
echo 'copied javascript over'

echo 'Done.'
