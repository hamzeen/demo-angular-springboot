var fs = require('fs');

// extract verison from command line arguments
const version = process.argv[3];

var files = fs.readdirSync('./dist/ng-labs').filter(fn => fn.startsWith('main'));
var data = fs.readFileSync('./dist/ng-labs/' + files[0]).toString().split("\n");

data.splice(0, 0, `window['version']='${version}';`);
var text = data.join("\n");

fs.writeFile('./dist/ng-labs/' + files[0], text, function (err) {
  if (err) return err;
});
