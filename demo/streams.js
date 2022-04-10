const fs = require('fs');

const readStream = fs.createReadStream('demo/docs/blog3.txt', {encoding: 'utf8'});  // encoding: utf8 = chunk.toString
const writeStream = fs.createWriteStream('demo/docs/blog5.txt')

// readStream.on('data', (chunk) => {
//     console.log('------ NEW CHUNK-------')
//     console.log(chunk)
//     writeStream.write('\n\n NEW CHUNK \n\n');
//     writeStream.write(chunk);
// })

readStream.pipe(writeStream)