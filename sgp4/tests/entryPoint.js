// Entry Point
// -----------

// This entryPoint.js sets up RequireJS for testing

require.config({
    baseUrl: '../sgp4/lib/',
    paths: {
        tests: 'tests',
        vendor: 'vendor'
        // lib: 'lib'
    }
})
