module('compat');

test('trim " center "', function () {
    equal(" center ".trim(), "center");
});
test('trim "left "', function () {
    equal("left ".trim(), "left");
});
test('trim " right"', function () {
    equal(" right".trim(), "right");
});

test('ltrim " center "', function () {
    equal(" center ".ltrim(), "center ");
});
test('ltrim "left "', function () {
    equal("left ".ltrim(), "left ");
});
test('ltrim " right"', function () {
    equal(" right".ltrim(), "right");
});

test('rtrim " center "', function () {
    equal(" center ".rtrim(), " center");
});
test('rtrim "left "', function () {
    equal("left ".rtrim(), "left");
});
test('rtrim " right"', function () {
    equal(" right ".rtrim(), " right");
});

// I don't know how to unit test things which use document