#!/bin/bash
CURRENT_DIR=`pwd`
rm -rf /repfiles/nasascience/media/sot/*
mkdir /repfiles/nasascience/media/sot/js
mkdir /repfiles/nasascience/media/sot/cesium
mkdir /repfiles/nasascience/media/sot/images
mkdir /repfiles/nasascience/media/sot/css
mkdir /repfiles/nasascience/media/sot/tle
cp -r $CURRENT_DIR/isat/cesium/* /repfiles/nasascience/media/sot/cesium
cp -r $CURRENT_DIR/isat/css/* /repfiles/nasascience/media/sot/css
cp -r $CURRENT_DIR/isat/images/* /repfiles/nasascience/media/sot/images
cp -r $CURRENT_DIR/isat/js/* /repfiles/nasascience/media/sot/js
cp -r $CURRENT_DIR/isat/tle/* /repfiles/nasascience/media/sot/tle
cp $CURRENT_DIR/science-sats/create_tle_files.py /repfiles/nasascience/media/sot/tle/create_tle_files.py