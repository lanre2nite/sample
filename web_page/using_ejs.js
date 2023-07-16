//using ejs method to render html pages
const express = require('express');
const app = express();

//using render
app.set('view engine', 'ejs');
//app.set('views', 'AA'); //to specify a different folder for the files
//app.set('AA', 'templates');
 
 // listen for request

app.get('/', (req, res) => {
    res.render('aaie');
});
app.get('/About', (req, res) => {
    res.render('aboutUs');
});
app.use((req, res) => {
    res.status(404).render('404');
});

app.listen(3000);