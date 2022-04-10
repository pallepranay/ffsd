// const http = require('http')
// const fs = require('fs')
// const _ = require('lodash')

//     //lodash
//     const num = _.random(0, 20);
//     console.log(num);

//     const greet = _.once(()=>{
//         console.log('hello');
//     })

//     greet()
//     greet()

// const server = http.createServer((req, res) =>{
//     console.log(req.url, req.method)

//     // set header content type
//     res.setHeader('Content-Type', 'text/html')
    
//     let path = "../views/";
//     //routing
//     switch(req.url){
//         case '/':
//             path +='index.html'
//             res.statusCode = 200;
//             break;
//         case '/login':
//             path += 'login.html';
//             res.statusCode = 200; // status codes
//             break;
//         //redirects
//         case '/signup':
//             res.statusCode = 301;
//             res.setHeader('Location', '/login')
//             res.end()
//         default:
//             path += 'error.html';
//             res.statusCode = 404;
//             break;
//     }

//     // send an html file
//     fs.readFile(path, (err, data) => {
//         if(err){
//             console.log(err)
//             res.end()
//         } else{
//             //res.write(data)
//             res.end(data)

//         }
//     })

    
// });



// server.listen(3000, 'localhost', ()=>{
//     console.log('listening for requests on port 3000')
// })

