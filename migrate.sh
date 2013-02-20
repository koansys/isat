#!/bin/bash
CURRENT_DIR=`pwd`
rm -rf /repfiles/nasascience/media/sot/*
mkdir /repfiles/nasascience/media/sot/js
mkdir /repfiles/nasascience/media/sot/cesium
mkdir /repfiles/nasascience/media/sot/images
mkdir /repfiles/nasascience/media/sot/css
mkdir /repfiles/nasascience/media/sot/tle
cp -r $CURRENT_DIR/js/* /repfiles/nasascience/media/sot/js
cp -r $CURRENT_DIR/viz/cesium/* /repfiles/nasascience/media/sot/cesium
cp -r $CURRENT_DIR/viz/Images/* /repfiles/nasascience/media/sot/images
cp -r $CURRENT_DIR/viz/static/css/* /repfiles/nasascience/media/sot/css
cp -r $CURRENT_DIR/viz/static/images/* /repfiles/nasascience/media/sot/images
cp -r $CURRENT_DIR/viz/static/js/* /repfiles/nasascience/media/sot/js
cp -r $CURRENT_DIR/viz/tle/* /repfiles/nasascience/media/sot/tle
cp $CURRENT_DIR/viz/index.js /repfiles/nasascience/media/sot/js/index.js
cp $CURRENT_DIR/viz/tle.js /repfiles/nasascience/media/sot/tle/tle.js