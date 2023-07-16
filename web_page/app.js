const express = require('express');
//express app
const app = express();
//using render
//app.set('AA engine', 'ejs');
//app.set('AA', 'templates');
app.listen(3000); 
 // listen for request

app.get('/', (req, res) => {
// Files and others goes down here
res.sendFile('./aaie.html', { root: __dirname });
//res.render('aaie.html', {title: 'Home Page'})
// so in our html file <title>Mypage | <% aaiE %></title>
});
app.get('/Home', (req, res) => {
    res.sendFile('/aaie.html', { root: __dirname });
    //<%- include('./templates/nav.ejs') %>
});
app.get('/aaie.html', (req, res) => {
    res.redirect('/Home');
});
//importing templates called partials by the use of express and ejs
//create a folder for the templates such as head, nav, footer etc   
//res.render('aaie.html');
  //  res.sendFile('./aaie.html', { root: __dirname });
     // Files and others goes down here
app.get('/About', (req, res) => {
    res.sendFile('./AboutUs.html', { root: __dirname });
    //<%- include('./templates/nav.ejs') %>
});
app.get('/AboutUs.html', (req, res) => {
    res.redirect('/About');
});
app.get('/Services', (req, res) => {
    res.sendFile('./Services.html', { root: __dirname });
});
app.get('/Services.html', (req, res) => {
    res.redirect('/Services');
});
app.get('/Contact', (req, res) => {
    res.sendFile('./ContactUS.html', { root: __dirname });
});
app.get('/ContactUs.html', (req, res) => {
    res.redirect('/Contact');
});

app.use((req, res) => {
    res.status(404).sendFile('/404.html', { root: __dirname });
});