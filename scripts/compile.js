#!/usr/bin/env node
const babel = require('@babel/core');
const path = require('path');
const fs = require('fs');
const glob = require('glob');
const fx = require('mkdir-recursive');

const files = [
    ...glob.sync('**/*.[tj]s?(x)', {
        cwd: 'src'
    })
];
const BABEL_BUILD_CONFIG = path.resolve('babel.build.config.js');

files.filter(file => (
    file.indexOf('.spec.') === -1 &&
    file.indexOf('.stories.') === -1) &&
    file.indexOf('__mocks__/') === -1 &&
    file.indexOf('__storybook__/') === -1 &&
    file.indexOf('tokens/colors') === -1 &&
    file.indexOf('tokens/icons') === -1 &&
    file.indexOf('tokens/shadows') === -1 &&
    file.indexOf('.d.ts') === -1 &&
    !file.startsWith('data/')
).forEach(file => {
    let result = babel.transformFileSync(path.resolve('src', file), {configFile: BABEL_BUILD_CONFIG});

    let target = path.resolve('dist', file).replace(/\.[tj]sx?$/, '.js');
    let folder = path.resolve(target, '..');

    if (!fs.existsSync(folder)) {
        fx.mkdirSync(folder);
    }

    result.code += '\n' + result.map.sources.map(m => '//# sourceMappingURL=' + m.replace(/\.[tj]sx?$/, '.js') + '.map\n');

    fs.writeFileSync(target, result.code);
    fs.writeFileSync(target + '.map', JSON.stringify(result.map));

    console.log('Transpiled file:', target);
});

function copyFile(srcFolder, destFolder, file, newFile) {
    if (typeof newFile === 'undefined') {
        newFile = file;
    }

    let source = path.resolve(srcFolder, file);
    if (fs.lstatSync(source).isFile()) {
        let target = path.resolve(destFolder, newFile);
        fx.mkdirSync(path.resolve(target, '..'));
        fs.createReadStream(source).pipe(fs.createWriteStream(target));
        console.log(`Copied ${source} to ${target}`);
    }
}

files.filter(file => (file.indexOf('.d.ts') !== -1))
    .forEach(file => copyFile('src', 'dist', file, file));

// Copy font files to dist
glob.sync('**/*.ttf', {cwd: 'src'}).forEach(file => {
    copyFile('src', 'dist', file);
});

// Copy json files to dist
glob.sync('**/*.json', {cwd: 'src'}).forEach(file => {
    copyFile('src', 'dist', file);
});
