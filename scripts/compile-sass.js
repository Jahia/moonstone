const glob = require('glob');
const fs = require('fs');
const path = require('path');
const fx = require('mkdir-recursive');
const sass = require('node-sass');
const jsonImporter = require('node-sass-json-importer');

const includeScssFile = file => (
    file.indexOf('.spec.') === -1 &&
    file.indexOf('.stories.') === -1 &&
    file.indexOf('__mocks__/') === -1 &&
    file.indexOf('__storybook__/') === -1 &&
    file.indexOf('tokens/colors') === -1 &&
    file.indexOf('tokens/icons') === -1 &&
    file.indexOf('tokens/shadows') === -1 &&
    file.indexOf('utils/') === -1 &&
    file.indexOf('globals/') === -1 &&
    !file.startsWith('data/')
);

module.exports = () => {
    const scssFiles = glob.sync('**/*.scss', {cwd: 'src'});

    scssFiles
        .filter(file => includeScssFile(file))
        .forEach(file => {
            console.log('SCSS to CSS:', file);

            const result = sass.renderSync({
                file: 'src/' + file,
                importer: jsonImporter({
                    convertCase: true
                })
            });
            const outputFile = (file.substring(file.lastIndexOf('.'), -1) || file) + '.css';

            let target = path.resolve('dist', outputFile);
            let folder = path.resolve(target, '..');

            if (!fs.existsSync(folder)) {
                fx.mkdirSync(folder);
            }

            fs.writeFileSync(target, result.css);
        });
};
