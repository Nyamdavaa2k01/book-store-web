// nodemon index.js 
//https://www.youtube.com/watch?v=pKd0Rpw7O48&t=2642s
// postman 
const Joi = require('joi') ; 
const express = require('express') ; 
const app = express () ; 

app.use (express.json()) ; // to use post method 

const courses = [
    { 
        id : 1 , name : 'name1' ,
    },
    { 
        id : 2 , name : 'name2' ,
    },
    { 
        id : 3 , name : 'name3' ,
    }


]; 

app.get('/', (req, res) => { // root 
    res.send ('sdsasadda') ; 
}) ; 

app.get('/api/courses', (req, res) => {
    // list of items 
    res.send (courses) ; // numbers should be replaced with real items 
}) 

app.post('/api/courses', (req, res) => {
    const schema = {
        name:Joi.string().min(3).required()
    }; 
    const result = Joi.validate(req.body, schema) ; 
    if (result.error) {
        res.status(400).send(result.error.details[0].message) ; 
        return ; 
    }
    const course = {
        id : courses.length+1, 
        name:req.body.name
    }; 
    courses.push(course) ;
    res.send(course) ; 
});

app.get('/api/courses/:id', (req, res) => {
    //  res.send(req.query);  
     const course = courses.find(c => c.id === parseInt(req.params.id)) ;
     if (!course) res.status(404).send ('Not found') ; 
     else res.send(course) ; 
}) ;



// app.put('/api/courses/:id', (req, res) => {
//     const course = courses.find(c => c.id === parseInt(req.params.id)) ;
//    if (!course) return res.status(404).send ('Not found') ;  
//     const { error } = validating(req.body) ; // result.error gej buitai adil
//     if (error) 
//         return res.status(400).send(result.error.details[0].message);  

//     course.name = req.body.name ; 
//     res.send(course) ; 
// }); 

// function validating (course) {
//     const schema = {
//         name : Joi.string().min(3).required() 
//     }
//     return Joi.ValidationError(course, schema) ;
// }

// app.delete('/api/courses/:id', (req, res) => {
//     const course = courses.find(c => c.id === parseInt(req.params.id)) ;
//    if (!course) return res.status(404).send ('Not found') ;
//    // delete 
//    const idx = courses.indexOf(course) ; 
//    courses.splice(idx, 1) ; 
//    res.send(course) ; 
// }); 



const port = process.env.PORT || 3000 ; 
app.listen(port, () => console.log(`Listening on port ${port}...`)) ;

