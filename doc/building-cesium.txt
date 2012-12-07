=================
 Building Cesium
=================

AGI's excellent Cesium is the library we use for virtual world visualization.

Clone it out from GitHub:

https://github.com/AnalyticalGraphicsInc/cesium

Build it using the Java `ant` tool (you'll need Java installed)::

  ant release

This builds everything: the Cesium library and all the demos and
documentation.

Copy the three files from .../cesium/Build/Unminified/ to your SOT
project's .../sot/viz/cesium/ directory:

 * 2761612 Dec  5 13:13 Cesium.js
 *   87087 Dec  5 13:13 cesiumWorkerBootstrapper.js
 *  128440 Dec  5 13:13 createVerticesFromExtent.js

These are referenced by our index.js file. We use the unminified
versions so we can debug.

Follow their mailing list where they announce fixes and
releases:

https://groups.google.com/forum/#!forum/cesium-dev

Create issues in their GitHub bug tracker if you find them.



