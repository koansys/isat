/*global document: true;
 */

if (typeof(String.prototype.trim) === 'undefined') {
    String.prototype.trim = function () {
        return this.replace(/^\s+|\s+$/g, "");
    };
};

if (typeof(String.prototype.ltrim) === 'undefined') {
    String.prototype.ltrim = function () {
        return this.replace(/^\s+/, "");
    };
};

if (typeof(String.prototype.rtrim) === 'undefined') {
    String.prototype.rtrim = function () {
        return this.replace(/\s+$/, "");
    };
};

// MATLAB fake compatibility output functions
// These rather assume the output elements are <pre/>
// so the \n gives linebreaks (adding <br/> would make double breaks)
// TODO: if the element doesn't exist, add it to the DOM.

function writeId(id, str) {   // TODO: need varargs and sprintf() here
    // TODO: isnt' there an append() method?
    document.getElementById(id).innerHTML += str + "<br/>\n";
}

function debug(str) {
    document.getElementById('debug').innerHTML += str + "\n";
}

function outfile(str) {
    // I'm using sprintf() so don't want "\n" from writeId()'s <br/>
    document.getElementById('outfile').innerHTML += str;
}

function fprintf1(str) {
    // I'm using sprintf() so don't want "\n" from writeId()'s <br/>
    document.getElementById('fprintf1').innerHTML += str;
}
