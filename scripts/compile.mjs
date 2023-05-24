#!/usr/bin/env node

import babel from '@jahia/scripts/babel.js';
import config from '../babel.build.config.js';
import copyFile from "@jahia/scripts/copy-file.js";
import glob from 'glob';

// console.log('Transpiling for js');
// babel('dist/js', {...config, presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript']});
console.log('Transpiling for esm');
babel('dist', config);

// Copy files to dist
copyFile('src', 'dist', 'declarations.d.ts')
glob.sync('**/*.ttf', {cwd: 'src'}).forEach(file => {
    copyFile('src', 'dist', file);
});
