#!/bin/bash
CURRENT_DIR=`pwd`
rm -rf /repfiles/nasascience/media/sot/*
echo 'removed current files'
mkdir /repfiles/nasascience/media/sot/js
echo 'make folder for javascript'
mkdir /repfiles/nasascience/media/sot/cesium
echo 'make folder for Cesium'
mkdir /repfiles/nasascience/media/sot/images
echo 'make folder for images'
mkdir /repfiles/nasascience/media/sot/css
echo 'make folder for css'
mkdir /repfiles/nasascience/media/sot/tle
echo 'make folder for tle'
cp -r $CURRENT_DIR/isat/cesium/* /repfiles/nasascience/media/sot/cesium
echo 'copied Cesium over'
cp -r $CURRENT_DIR/isat/css/* /repfiles/nasascience/media/sot/css
echo 'copied css over'
cp -r $CURRENT_DIR/isat/images/* /repfiles/nasascience/media/sot/images
echo 'copied images over'
cp -r $CURRENT_DIR/isat/js/* /repfiles/nasascience/media/sot/js
echo 'copied javascript over'
cp -r $CURRENT_DIR/isat/tle/* /repfiles/nasascience/media/sot/tle
echo 'copied tle over'
cp $CURRENT_DIR/science-sats/create_tle_files.py /repfiles/nasascience/media/sot/tle/create_tle_files.py