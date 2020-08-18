const sass = require('../node_modules/sass');
const fs = require('fs');
const stylesFolder = 'src/styles/';

fs.readdirSync(stylesFolder).forEach(name => {
    const filename = name.split('.').slice(0, -1).join('.');

    sass.render({
        file: `${stylesFolder}${filename}.scss`,
        outFile: `${stylesFolder}${filename}.css`,
    }, function (error, result) {
        // node-style callback from v3.0.0 onwards
        if (!error) {
            // No errors during the compilation, write this result on the disk
            fs.writeFile(`${stylesFolder}${filename}.css`, result.css, function (err) {
            });
        }
    });
});