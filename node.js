var fs          = require('fs'),
    readline    = require('readline');

// input from a file and no output
var rd = readline.createInterface({
    input: fs.createReadStream('./data.json'),
    output: null,
    console: false
});


// read file line by line
rd.on('line', function(line) {
    console.log(line)
})
