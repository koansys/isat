/*global console, XMLHttpRequest */

function testLoadUrls() {
    'use strict';

    var FILES = ['stations.txt', 'science.txt'];

    function readFile(url) {
        // https://developer.mozilla.org/en-US/docs/DOM/XMLHttpRequest/Using_XMLHttpRequest
        var request = new XMLHttpRequest();
        var ASYNC = false;      // TODO do async callback properly
        var content;

        request.open('GET', url, ASYNC);
        request.send();                 // blocks until returned due to ASYNC=false
        if (request.status !== 200) {
            return null;            // TODO throw an error
        }
        content = request.responseText;
        return content;
    }

    function test() {
        var fn;
        var url;
        var content;
        for (fn = 0; fn < FILES.length; fn += 1) {
            url = 'http://www.celestrak.com/NORAD/elements/' + FILES[fn];
            content = readFile(url);
            console.log('fn=' + fn + ' file=' + FILES[fn] + ' content.length=' + content.length);
        }
    }

    return test;
}

testLoadUrls();

