const path = require('path');

function indexTemplate(files) {
  const exportEntries = files.map((file) => {
    console.log(file);
    const basename = path.basename(file, path.extname(file));
    const exportName = /^\d/.test(basename) ? `Svg${basename}` : basename;
    return `export { default as ${exportName} } from './${basename}';`;
  });
  exportEntries.push('export * from \'./utils\';');
  return exportEntries.join('\n');
}

module.exports = indexTemplate;