
// register view engine
app.set('view engine', 'ejs')

// listen for requests

// middle ware &static files
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));