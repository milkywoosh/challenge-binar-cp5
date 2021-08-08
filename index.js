// const { reduce } = require('async');
const express = require('express');
const app = express();
const morgan = require('morgan'); // 3rd middleware
const path = require('path');
require('dotenv').config();
const { handlingLogin, handlingInputLogin, handlingHomePage, handlingSuitGame, handlingRegister } = require('./handler-page');

/* view engine -----
 it is a must to put any ".ejs" file inside "views" folder
 bcs it is the default folder to lookup
*/
app.set('view engine', 'ejs');

// set up agar CSS terbaca
// point -> to make all root path visible
app.use(express.static(__dirname));
// middleware to direct to specific directory
app.use(express.static(path.join(__dirname, "static")));

app.use(express.json()); // later on usefull for auth, login
app.use(express.urlencoded({extended: false}));




// console.log(`NODE_ENV PORT: ${process.env.PORT}`); // check current port
// console.log(`NODE_ENV PORT: ${process.env.NODE_ENV}`); // check current var env  
console.log(`${app.get('env')}`); // check where env we are in


if (app.get('env') === 'development') {
    app.use( morgan('tiny'));  // third party middleware;
    console.log("morgan enabled");
}
// done
app.get('/home-testing', (req, res) => {
    res.send('at home page');
});
// done
app.get('/api', (req, res) => {
    res.send({
        page: "/api",
        status: 200
    });
});


// import json db
const api_chapter = require('./handler-route/index-route');
app.use('/api/bootcamp-chapter', api_chapter);

// done
//  using .ejs extension
// home page at chapter3
app.get('/api/home-page', handlingHomePage); 

// done
// game at chapter4
app.get('/api/home-page/game-suit', handlingSuitGame);


// done
// merubah '/chapter3' akan pengaruh ke proses rendering, apalagi jika route sudah digunakan sebelumnya
app.get('/chapter3', (req, res) => {
    res.sendFile('index.html' ,
        { 
            root: path.join(__dirname, './static/render_html_extension/part3/main_page')
            // jgn lupa directory di dalam html juga berubah
            // arahkan mulai dari render_static: karena di awal di state ->> app.use(express.static(path.join(__dirname, "render_static")));
        });
});

 
// register
app.get('/api/home-page/register', handlingRegister);
// input register 
app.post('/api/home-page/register', handlingRegister);
// login 
app.get('/api/home-page/login', handlingLogin);
// input login 
app.post('/api/home-page/login', handlingInputLogin);


// contoh random
app.get('/tes_contoh', (req, res) => {
    res.render('index_exmpl-top-express', {
        subject: 'EJS template engine',
        name: 'our template',
        link: 'https://google.com'
      });
}); 

// firstly PORT at environment var hasnt been set
// then set it: "export PORT=anyport"  at terminal 
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`listen to ${port}`);
});
