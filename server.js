// load the things we need
var express = require('express');
var app = express();
const path = require("path")
const Prisma= require("./prisma/client");

// set the view engine to ejs
app.set('view engine', 'ejs');
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

// use res.render to load up an ejs view file

// index page
app.get('/menu', async function(req, res) {
    const menu = await Prisma.menu.findMany();
    const makanan = menu.filter((item)=>item.tipe_menu=="makanan")
    const minuman = menu.filter((item)=>item.tipe_menu=="minuman")
    res.render('pages/menu', {makanan,minuman});
    
});

// about page
app.get('/home', function(req, res) {
    res.render('pages/home');
});

app.get('/about', function(req, res) {
    res.render('pages/about');
});

app.listen(8080);
console.log('8080 is the magic port');