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
const Instructor = require('./models/courseinst');


// express app
const app = express();
const port = process.env.PORT || 3000

// connect to MONGODB
const dbURI = 'mongodb+srv://pranay:nothing1234@nodetuts.ygp7w.mongodb.net/nodetuts?retryWrites=true&w=majority';
mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true})
.then((result)=> {
    console.log("connected to database. Successfull")
    app.listen(port)
})
.catch((err) => console.log(err))

// Cart code
const facultydata=module.require('./models/faculty.js');
const studentdata = module.require('./models/student.js')





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
var facty1 = {};

// Signup code

app.post('/login', (req, res) => {
    const student = new Student(req.body);
    console.log('new student');
    console.log(student);
    Student.find()
        .then((result) => {
            var tmp = 0;
            result.forEach(element =>{
                if (element.email == student.email && element.password == student.password){
                    tmp+=1;
                }
            })

            console.log(tmp)
            if (tmp == 0){
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

app.post('/student', async (req,res) =>{
    const student = new Student(req.body);
    let username='';
   await Student.find()
        .then(async (result) =>{
            var tmp2 = 0;
            result.forEach(element =>{
                if (element.email == student.email && element.password == student.password){
                    tmp2 +=1;
                    result = element;
                    stud1 = element;
                    username=element.fullname;
                }
            })

            console.log(tmp2)
            if (tmp2 == 0){
                res.render("login", {errlogin: 'no defined user'});
            }
            else{

               await  facultydata.find()
                .then((resu)=>{
                    console.log(resu);
                    // console.log("data is"+stud1)
                    res.render('student',{result:stud1,user_name:username,faculty:resu});
                    // res.render('./course_inner/course6',{result:stud1,usr_name:username});
                })
                .catch((err)=>{
                    console.log(err);
                });

                // console.log("data is"+stud1)
                // res.render('student',{result:stud1,user_name:username});
                // res.render('./course_inner/course6',{result:stud1,usr_name:username});
            }
        })
        .catch((err)=>{
            console.log(err);
        })
});


// Signup code

app.post('/facultylogin', (req, res) => {
    const instructor = new Instructor(req.body);
    console.log('new instructor');
    console.log(instructor);
    Instructor.find()
        .then((result) => {
            var tmp = 0;
            result.forEach(element =>{
                if (element.email == instructor.email && element.password == instructor.password){
                    tmp+=1;
                }
            })

            console.log(tmp)
            if (tmp == 0){
                instructor.save()
                    .then((result) => {
                        console.log("new result" + result);
                        facty1 = result;
                        res.render('facultylogin',{result});
                    })

                    .catch((err) =>{
                        console.log(err);
                    })
            }
            else
            res.render("facultylogin", {errsend: 'An User Already exits with this email'});
            console.log('An User Already exits with this email');
            
        })
});


// Login code

app.post('/temp2', async (req,res) =>{

    const instructor = new Instructor(req.body);
    let username='';
   await Instructor.find()
        .then(async (result) =>{
            var tmp2 = 0;
            result.forEach(element =>{
                if (element.email == instructor.email && element.password == instructor.password){
                    tmp2 +=1;
                    result = element;
                    facty1 = element;
                    username=element.fullname;
                }
            })

            console.log(tmp2)
            if (tmp2 == 0){
                res.render("facultylogin", {errlogin: 'no defined user'});
            }
            else{
                res.render('temp')

                console.log("data is"+facty1)
                
            }
        })
        .catch((err)=>{
            console.log(err);
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

app.get('/student', async (req, res)=>{

    // await  facultydata.find()
    //             .then((resu)=>{
    //                 console.log(resu);
    //                 // console.log("data is"+stud1)
    //                 res.render('student',{result:stud1,user_name:username,faculty:resu});
    //                 // res.render('./course_inner/course6',{result:stud1,usr_name:username});
    //             })
    //             .catch((err)=>{
    //                 console.log(err);
    //             });
})

app.get('/quiz', (req,res)=>{
    res.render('quiz')
})

app.get('/aboutus', (req,res)=>{
    res.render('aboutus')
})



//checkout page
app.get('/checkout', (req, res)=>{
    res.render('checkout')
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

app.get('/instructort', (req, res)=>{
    Instructor.find().
    then((result)=>{
        res.render('instructort',{data:result});
    })
    .catch((err)=>{
        console.log(err);
    });
})

app.get('/tcourses', (req, res)=>{
    facultydata.find().
    then((result)=>{
        res.render('tcourses',{data:result});
    })
    .catch((err)=>{
        console.log(err);
    });
    
})



app.get('/tcourses')

app.get('/user', (req, res)=>{
    studentdata.find().
    then((result)=>{
        res.render('user',{data:result});
    })
    .catch((err)=>{
        console.log(err);
    });
})

app.get('/success', (req, res)=>{
    res.render('success')
})
app.get('/tsales', (req, res)=>{
    res.render('tsales')
})

app.post('/delfac/:fid', (req, res)=>{
    facultydata.deleteOne({_id: req.params.fid})
    .then((result)=>{
        res.redirect('/instructort');
    })
    .catch((err)=>{
        console.log(err);
    });
})


app.post('/deluser/:fid', (req, res)=>{
    studentdata.deleteOne({_id: req.params.fid})
    .then((result)=>{
        res.redirect('/user');
    })
    .catch((err)=>{
        console.log(err);
    });
})




app.get('/facultylogin', (req, res)=>{
    res.render('facultylogin')
})



//admin page
app.get('/admin', (req, res)=>{
    res.render('admin')
})
// admin Dashboard
app.get('/adminDashboard', (req,res)=>{
    res.render('adminDashboard')
})
app.get('/temp',(req,res)=>{
    res.render('temp');
});

app.post('/temp',async(req,res)=>{
    //  console.log(req.body);
    const fd=new facultydata({
        Title:req.body.ctitle,
        Pname:req.body.profname,
        Price:req.body.cprice,
        Rating:req.body.crating,
        Desc:req.body.cdescription,
        image:req.body.image
    })
    
    fd.save()
        .then((result)=>{
            res.send('succuss')
        })
        .catch((err)=>{
            console.log(err);
        });
});

// 404 page
app.use((req, res) => {
    res.status(404).render('error')
})


