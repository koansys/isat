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

Copy recursively the contents .../cesium/Build/CesiumUnminified/ directory::

  drwxr-xr-x       102 Jan 25 11:50 Assets
  -rw-r--r--   2874967 Jan 25 11:54 Cesium.js
  drwxr-xr-x       136 Jan 25 11:50 Widgets
  drwxr-xr-x       136 Jan 25 11:50 Workers to your SOT

to your project's .../sot/viz/cesium/ directory.

These are referenced by our index.js file. We use the unminified
versions so we can debug.

Follow their mailing list where they announce fixes and
releases:

https://groups.google.com/forum/#!forum/cesium-dev

Create issues in their GitHub bug tracker if you find them.



