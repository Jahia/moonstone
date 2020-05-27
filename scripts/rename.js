#!/usr/bin/env node
const fs = require('fs');
const args = process.argv.slice(2);

fs.renameSync(args[0], args[1]);
