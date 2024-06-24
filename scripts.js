// const express = require('express')
// const app = express()


// app.use (function(req,res,next){
//     console.log("hwllooo")
//     next()
// });
// app.get('/', function (req, res) {
//   res.send('Hello World dddddddddfefefefeddaaaaa');
//   console.log("bejfge")
// })

// app.get('/profile', function (req, res) {
//     res.send('Hello World dddddddddfefefefeddaaaaakkkk');
//   })

// app.listen(3000)
// var http = require('http');
// var url = require('url');

// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   var q = url.parse(req.url, true).query;
//   var txt = q.year + " " + q.month;
//   res.end(txt);
// }).listen(8080);



//routing
const express = require("express");
const app = express();

// app.use(function(req,res,next){
//   //    console.log("middleware");

//   next();

// })

app.set("view engine","ejs"); 
// if the control is gone on middleware at least once than it will not go to any other routes/middleware by itself for that we need to push so that our request moves to the next part which should be executed
app.use(express.static('./public'));
// we can make middlewareas much as we want
app.get("/", function (req, res) {
  res.render('Hello World')
})

//req have data of user e.g.location,device info etc who is requesting but (res) have controls(not data) on the basis of them we can send response from the sercver more like functional thing
app.get('/profile', function (req, res) {
  res.render('index',{age:12})  //while render remember of nameing the file within views folder in it and dont use .ejs in render function
})
app.get('/contact', function(req,res){
  res.render('contact')
})

app.get('/error',function(req,res,next){
  throw Error("something went wrong")
})
// app.get("/profile/:username",function(req,res){
//   res.send(`${req.params.username}`);//accrssing the response
// })

app.use(function errorHandler (err, req, res, next) {
  if (res.headersSent) {
    return next(err)
  }
  res.status(500)
  res.render('error', { error: err })
})

app.listen(3000)

//dynamic routing
//any route whose one part is same and ohterone changes simultaneously for that we make dynamic routing
// eg: profile/prashant
//     profile/rishab
//     profile/karan
//     profile/nest

// /profile/:username here username is a variable which can be anything 

//tempalate engines => pug,handlebars,ejs,jade, ye ek style of markup se html m convert hota h
//ejs is html lookalike in backend,very very similiar to html we can dynamic value inejs but not in html
//we need to seup ejs
// *install ejs
// *

//ejs install

//configure ejs
// app.set("view engine","ejs");
// ek views folder banao
// and then make ejs file in It 
// render instead of send

//static files
// images,stylesheet , frontend javascript
// 1 create a folder called Public  
//  2 create 3 folders inside it, images, stylesheets,javascripts
//  configure the express static in scripts.js file
//  understand the path