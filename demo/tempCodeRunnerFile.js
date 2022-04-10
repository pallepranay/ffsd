// code to delete files
if(fs.existsSync('docs/deletefile.txt')) {
    fs.unlink('./docs/deletefile.txt', (err)=>{
        if (err) {
            console.log(err)
        }
        console.log('file deleted')
    })
}