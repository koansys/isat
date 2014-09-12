/*global module, process, require*/

"use strict";

var request = require("request");

module.exports = function(grunt) {
    var browsers = [
        {platform: "linux", browserName: "chrome", version: "36"},
        // {platform: "linux", browserName: "chrome", version: "35"},
        {platform: "linux", browserName: "firefox", version: "31"},
        // {platform: "linux", browserName: "firefox", version: "30"},
        // {platform: "linux", browserName: "firefox", version: "29"},
        {platform: "WIN8.1", browserName: "firefox", version: "31"},
        {platform: "WIN8.1", browserName: "chrome", version: "36"},
        {platform: "WIN8.1", browserName: "internet explorer", version: "11"},
        {platform: "WIN8", browserName: "internet explorer", version: "10"},
        // {platform: "WIN7", browserName: "internet explorer", version: "9"},
        {platform: "WIN7", browserName: "internet explorer", version: "10"},
        // {platform: "VISTA", browserName: "internet explorer", version: "9"},
        // {platform: "OS X 10.8", browserName: "safari", version: "6"},
        // {platform: "OS X 10.8", browserName: "chrome", version: "35"},
        {platform: "OS X 10.9", browserName: "chrome", version: "35"},
        {platform: "OS X 10.9", browserName: "safari", version: "7"},
        // {platform: "OS X 10.9", browserName: "firefox", version: "28"},
        // {platform: "OS X 10.9", browserName: "firefox", version: "29"},
        {platform: "OS X 10.9", browserName: "firefox", version: "30"},
        {platform: "OS X 10.9", browserName: "iphone", version: "7.1"},
        {platform: "linux", browserName: "android", version: "4.3"},
        {platform: "linux", browserName: "android", version: "4.4"}
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
                        tunnelTimeout: 30,
                        build: process.env.TRAVIS_JOB_ID,
                        concurrency: 3,
                        browsers: browsers,
                        capabilities: {
                            browserName: "chrome",
                            "chromeOptions":{
                                args: ["--test-type"]
                            }
                        },
                        testname: "iSat Unit tests",
                        tags: ["master"],
                        sauceConfig: {
                            "video-upload-on-pass": false,
                            "idle-timeout": 600,
                            "max-duration": 1800,
                            "command-timeout": 600
                        },
                        onTestComplete: function(result, cb){
                         // returning undefined doesn't alter the test result
                         //   but returning true or false does.
                         //   See: https://github.com/axemclion/grunt-saucelabs

                        var user = process.env.SAUCE_USERNAME;
                        var pass = process.env.SAUCE_ACCESS_KEY;
                        request.put({
                            url: ["https://saucelabs.com/rest/v1", user, "jobs", result.job_id].join("/"),
                            auth: { user: user, pass: pass },
                            json: { passed: !result.passed }
                        }, function (error, response, body) {
                          if (error) {
                            cb(error);
                        } else if (response.statusCode !== 200) {
                            cb(new Error("Unexpected response status:" + response.statusCode));
                        } else {
                            cb(null, !result.passed);
                        }
                        body=body; // Shuts up JSHint
                    });
                        // if (result.passed === false) {
                        //     cb(null, true);
                        // } else {
                        //    cb(null,undefined);
                        // }
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
