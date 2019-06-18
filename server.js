const express = require('express');
const app = express();
const layouts = require('express-ejs-layouts');

app.set('view engine', 'ejs');
app.use(layouts);

//ROUTES
app.get('/', function(req, res) {
    res.render('index');
});

app.get('/contact', function(req, res) {
    var contacts = {
        name: "Vincent Djie",
        email: "vincentdjie@gmail.com",
        phone: "206-618-4746",
        fax: "Who uses faxes anymore?",
        site: "http://steve.io"
    };
    res.render('contact', {contacts});
})

app.get('/skills', function(req, res) {
    var skillz = [
        "JavaScript",
        "HTML 5",
        "CSS 3",
        "Node JS",
        "Express JS",
        "Crooning"
    ];
    res.render('skills', {skillz});
})

//home index.ejs, skills.ejs, contact.ejs
//pass into render
//list all data var on contact into the page {blabla}

app.listen(3000, function() {
    console.log("Love you 3000 😘");
});