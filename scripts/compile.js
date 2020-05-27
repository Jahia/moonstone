#!/usr/bin/env node
const babel = require('@babel/core');
const path = require('path');
const fs = require('fs');
const glob = require('glob');
const fx = require('mkdir-recursive');

const files = [
    ...glob.sync('**/*.js', {
        cwd: 'src'
    }),
    ...glob.sync('**/*.jsx', {
        cwd: 'src'
    })
];

files.filter(file => (
    file.indexOf('.spec.') === -1 &&
    file.indexOf('.stories.') === -1) &&
    file.indexOf('/tokens/') === -1 &&
    file.indexOf('/__mocks__/') === -1 &&
    file.indexOf('/__storybook__/') === -1
).forEach(file => {
    let result = babel.transformFileSync(path.resolve('src', file));

    let target = path.resolve('dist', file);
    let folder = path.resolve(target, '..');

    if (!fs.existsSync(folder)) {
        fx.mkdirSync(folder);
    }

    fs.writeFileSync(target, result.code);
    fs.writeFileSync(target + '.map', JSON.stringify(result.map));

    console.log('Transpiled file ', target);
});

function copyFile(srcFolder, destFolder, file) {
    let source = path.resolve(srcFolder, file);
    if (fs.lstatSync(source).isFile()) {
        let target = path.resolve(destFolder, file);
        fx.mkdirSync(path.resolve(target, '..'));
        fs.createReadStream(source).pipe(fs.createWriteStream(target));
        console.log(`Copied ${source} to ${target}`);
    }
}

glob.sync('**/*.scss', {cwd: 'src'}).forEach(file => {
    copyFile('src', 'dist', file, file.slice(0, -3) + '.d.ts');
});

glob.sync('**/*.ttf', {cwd: 'src'}).forEach(file => {
    copyFile('src', 'dist', file, file.slice(0, -3) + '.d.ts');
});
