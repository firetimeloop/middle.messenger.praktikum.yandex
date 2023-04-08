const { JSDOM } = require('jsdom');
const Handlebars = require('handlebars');
const fs = require('fs');

const { window } = new JSDOM('<div id="app"></div>', {
    url: 'http://localhost:3000/'
});

global.window = window;
global.document = window.document;
global.DocumentFragment = window.DocumentFragment;
global.FormData = window.FormData;

require.extensions['.hbs'] = function (module, fileName) {
    const content = fs.readFileSync(fileName, 'utf-8');

    module.exports = Handlebars.compile(content);
}

require.extensions['.scss'] = function (module) {
    module.exports = {};
}
