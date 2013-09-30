// Get, parse, and return TLE structures

var tle = {
    // I need to get a grip on proper OO patterns :-(
    content : null,
    lines : null,
    tles : null,
    readFile : function (fileName) {
        // https://developer.mozilla.org/en-US/docs/DOM/XMLHttpRequest/Using_XMLHttpRequest
        var request = new XMLHttpRequest();
        var ASYNC = false;      // TODO do async callback properly
        request.open('GET', fileName, ASYNC);
        request.send();                 // blocks until returned due to ASYNC=false
        if (request.status !== 200) {
            return null;            // TODO throw an error
        }
        this.content = request.responseText;
        return this.content;
    },
    readFileLines : function (fileName) {
        this.readFile(fileName);
        this.lines = this.content.split('\n');
        return this.lines;
    },
    parseFile : function (fileName) {
        // Read file: if line starts with '1' or '2' assume TLE line 1, 2, otherwise store as comment/name
        var lines = this.readFileLines(fileName);
        var line;
        var tle = [];
        var tles = [];
        for (linenum = 0; linenum < lines.length; linenum++) {
            if (lines[linenum].substring(0, 2) === '1 ') {
                tle[1] = lines[linenum];
            }
            else if (lines[linenum].substring(0, 2) === '2 ') {
                tle[2] = lines[linenum];
                tles.push(tle);
                tle = [];
            }
            else {
                tle[0] = lines[linenum]; // TODO: trim whitespace
            }
        }
        console.log('tle.js: File=' + fileName + ' TLEs=' + tles.length);
        this.tles = tles;
        return tles;
    }
};

