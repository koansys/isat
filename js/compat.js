String.prototype.trim = function() {
    return this.replace(/^\s+|\s+$/g, "");
}

// TODO: need to learn how to namespace these, like
// var compat =  {
//     writeId: function (...) {...}
//     debug: function (...) {...}


// MATLAB fake compatibility functions

function writeId(id, str) {
    document.getElementById(id).innerHTML += str + "<br/>\n";
}
function debug(str) {
    writeId('debug', str);
}

function outfile(str) {
    writeId('outfile', str);
}

function fprintf1(str) {
    writeId('fprintf1', str);
}


window.onload = function () {
    writeId('writeId', 'writeId text');
    debug('debug text');
    fprintf1('fprintf1 text');
    outfile('outfile text');
}
