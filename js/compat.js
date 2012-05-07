/*global document: true
 */

// TODO: aren't we already doing this with an intrinsic somewhere?
String.prototype.trim = function () {
    return this.replace(/^\s+|\s+$/g, "");
};

// MATLAB fake compatibility functions

function writeId(id, str) {   // TODO: need varargs and sprintf() here
    // TODO: isnt' there an append() method?
    document.getElementById(id).innerHTML += str + "<br/>\n";
}
function debug(str) {
    writeId('debug', str);
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


// window.onload = function () {
//     writeId('writeId', 'writeId text');
//     debug('debug text');
//     fprintf1('fprintf1 text');
//     outfile('outfile text');
// }
