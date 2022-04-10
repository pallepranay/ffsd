//--------------------------------------------------------------------------
// Yet to do ....
// 1. Cart and check out code

// 2. payment gateway (optional) 

// 3. courses addition and removal from database

//--------------------------------------------------------------------------


const { application } = require('express');
const express = require('express');
const morgan = require('morgan')
const res = require('express/lib/response');
const mongoose = require('mongoose')
const Student = require('./models/student');
const student = require('./models/student');

// express app
const app = express();
const port = process.env.port || 3000

// connect to MONGODB
const dbURI = 'mongodb+srv://pranay:nothing1234@nodetuts.ygp7w.mongodb.net/nodetuts?retryWrites=true&w=majority';
mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true})
.then((result)=> {
    console.log("connected to database. Successfull")
    app.listen(port)
})
.catch((err) => console.log(err))

// Cart code

// payment gateway

// courses addition and removal from gateway

// register view engine
app.set('view engine', 'ejs')

// listen for requests

// middle ware &static files
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
// Third party middle ware
app.use(morgan('dev'))

var stud1 = {};

// Signup code

app.post('/login', (req, res) => {
    const student = new Student(req.body);
    console.log('new student');
    console.log(student);
    Student.find()
        .then((result) => {
            var temp = 0;
            result.forEach(element =>{
                if (element.email == student.email && element.password == student.password){
                    temp+=1;
                }
            })

            console.log(temp)
            if (temp == 0){
                student.save()
                    .then((result) => {
                        console.log("new result" + result);
                        stud1 = result;
                        res.render('login',{result});
                    })

                    .catch((err) =>{
                        console.log(err);
                    })
            }
            else
            res.render("login", {errsend: 'An User Already exits with this email'});
            console.log('An User Already exits with this email');
            
        })
});


// Login code

app.post('/student', (req,res) =>{
    const student = new Student(req.body);
    let username='';
    Student.find()
        .then((result) =>{
            var temp2 = 0;
            result.forEach(element =>{
                if (element.email == student.email && element.password == student.password){
                    temp2 +=1;
                    result = element;
                    stud1 = element;
                    username=element.fullname;
                }
            })

            console.log(temp2)
            if (temp2 == 0){
                res.render("login", {errlogin: 'no defined user'});
            }
            else{
                console.log("data is"+stud1)
                res.render('student',{result:stud1,user_name:username});
                res.render('./course_inner/course6',{result:stud1,usr_name:username});
            }
        })
});



app.get('/', (req, res) =>{
    //res.send('<p>home page</p>');
    res.render('index');
})

app.get('/login', (req, res) =>{
    //res.send('<p>home page</p>');
    res.render('login');
})

// redirects
app.get('/signup', (req, res) => {
    res.redirect('/login');
})

// redirects
app.get('/index', (req, res) => {
    res.redirect('/');
})

// student

app.get('/student', (req, res)=>{
    res.render('student')
})

app.get('/quiz', (req,res)=>{
    res.render('quiz')
})

app.get('/aboutus', (req,res)=>{
    res.render('aboutus')
})


//course1
app.get('/course_inner/course1', (req, res)=>{
    res.render('course_inner/course1')
})

//course2
app.get('/course_inner/course2', (req, res)=>{
    res.render('course_inner/course2')
})

//course3
app.get('/course_inner/course3', (req, res)=>{
    res.render('course_inner/course3')
})
//course4
app.get('/course_inner/course4', (req, res)=>{
    res.render('course_inner/course4')
})
//course5
app.get('/course_inner/course5', (req, res)=>{
    res.render('course_inner/course5')
})
//course6
app.get('/course_inner/course6', (req, res)=>{
    res.render('course_inner/course6')
})
//course7
app.get('/course_inner/course7', (req, res)=>{
    res.render('course_inner/course7')
})
//course8
app.get('/course_inner/course8', (req, res)=>{
    res.render('course_inner/course8')
})
//course9
app.get('/course_inner/course9', (req, res)=>{
    res.render('course_inner/course9')
})
//course10
app.get('/course_inner/course10', (req, res)=>{
    res.render('course_inner/course10')
})
//course11
app.get('/course_inner/course11', (req, res)=>{
    res.render('course_inner/course11')
})
//course12
app.get('/course_inner/course12', (req, res)=>{
    res.render('course_inner/course12')
})

//admin page
app.get('/admin', (req, res)=>{
    res.render('admin')
})
// admin Dashboard
app.get('/adminDashboard', (req,res)=>{
    res.render('adminDashboard')
})



// 404 page
app.use((req, res) => {
    res.status(404).render('error')
})