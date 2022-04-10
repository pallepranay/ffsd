const fs = require('fs')

// //writing files

// fs.writeFile('demo/docs/blog1', 'namasthey telangana', ()=>{

// })

// //reading files
// fs.readFile('demo/docs/blog1', (err, data) => {
//     if (err){
//         console.log(err);
//     }
//     console.log(data.toString());
// });

// console.log('last line');

// creating and removing directory

// if (!fs.existsSync('./pfolder')) {
//     fs.mkdir('pfolder', (err)=>{
//         if(err){
//             console.log(err)
//         }
//         console.log('folder created')
//     })
// } else {
//     fs.rmdir('./pfolder', (err)=>{
//         if(err){
//             console.log(err)
//         }
//         console.log('folder deleted')
//     })
// }

// // code to delete files

// if(fs.existsSync('demo/deletefile.txt')) {
//     fs.unlink('demo/deletefile.txt', (err)=>{
//         if (err) {
//             console.log(err)
//         }
//         console.log('file deleted')
//     })
// }

