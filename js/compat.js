/*global document: true
 */

// TODO: aren't we already doing this with an intrinsic somewhere?
String.prototype.trim = function () {
    return this.replace(/^\s+|\s+$/g, "");
};

// MATLAB fake compatibility output functions
// These rather assume the output elements are <pre/>
// so the \n gives linebreaks (adding <br/> would make double breaks)

function writeId(id, str) {   // TODO: need varargs and sprintf() here
    // TODO: isnt' there an append() method?
    document.getElementById(id).innerHTML += str + "<br/>\n";
}
function debug(str) {
    //writeId('debug', str);
    document.getElementById('debug').innerHTML += str + "\n";
}

function outfile(str) {
    // I'm using sprintf() so don't want "\n" from writeId()'s <br/>
    //writeId('outfile', str);
    document.getElementById('outfile').innerHTML += str;
}

function fprintf1(str) {
    // I'm using sprintf() so don't want "\n" from writeId()'s <br/>
    //writeId('fprintf1', str);
    document.getElementById('fprintf1').innerHTML += str;
}
