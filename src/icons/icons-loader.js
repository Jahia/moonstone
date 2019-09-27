const files = require.context('!svg-sprite-loader!./asset', false, /.*\.svg$/)
files.keys().forEach(files)
