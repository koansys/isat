/*global module, process*/

"use strict";

module.exports = function(grunt) {
    var browsers = [
        {platform: "linux", browserName: "chrome", version: "34"},
        {platform: "linux", browserName: "firefox", version: "29"},
        {platform: "WIN8.1", browserName: "firefox", version: "29"},
        {platform: "WIN8.1", browserName: "chrome", version: "34"},
        {platform: "WIN8.1", browserName: "internet explorer", version: "11"},
        {platform: "WIN8", browserName: "internet explorer", version: "10"},
        // {platform: "WIN7", browserName: "internet explorer", version: "9"},
        {platform: "WIN7", browserName: "internet explorer", version: "10"},
        // {platform: "VISTA", browserName: "internet explorer", version: "9"},
        {platform: "OS X 10.8", browserName: "safari", version: "6"},
        {platform: "OS X 10.8", browserName: "chrome", version: "34"},
        {platform: "OS X 10.9", browserName: "chrome", version: "34"},
        {platform: "OS X 10.9", browserName: "safari", version: "7"},
        {platform: "OS X 10.9", browserName: "firefox", version: "28"},
        {platform: "OS X 10.9", browserName: "iphone", version: "7.1"},
        {platform: "linux", browserName: "android", version: "4.3"}
        ];


    grunt.initConfig({
        connect: {
            server: {
                options: {
                    base: "",
                    port: 9999
                }
            }
        },
        "saucelabs-jasmine": {
            all: {
                options: {
                    urls: ["http://127.0.0.1:9999/jasmine/SpecRunner.html"],
                    tunnelTimeout: 5,
                    build: process.env.TRAVIS_JOB_ID,
                    concurrency: 3,
                    browsers: browsers,
                    testname: "iSat Unit tests",
                    tags: ["master"],
                    sauceConfig: {
                        "video-upload-on-pass": false
                    },
                    onTestComplete: function(result){
                        /* returning undefined doesn't alter the test result
                           but returning true or false does.
                           See: https://github.com/axemclion/grunt-saucelabs

                           We return true if result.passed is undefined to
                           gloss over spurious errors from saucelabs.
                           See: https://github.com/admc/wd/issues/86 which is
                           all I could find about it.

                           Everything else gets unaltered results.

                        */
                        if (result.passed === undefined) {
                            return true;
                        } else {
                           return undefined;
                        }
                    }
                }
            }
        },
        watch: {}
    });

    // Loading dependencies
    for (var key in grunt.file.readJSON("package.json").devDependencies) {
        if (key !== "grunt" && key.indexOf("grunt") === 0) grunt.loadNpmTasks(key);
    }

    grunt.registerTask("dev", ["connect", "watch"]);
    grunt.registerTask("test", ["connect", "saucelabs-jasmine"]);
};
