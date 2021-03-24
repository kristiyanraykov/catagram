const express = require('express');
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser')
const app = express();


app.engine('hbs', handlebars({
    extname: 'hbs',
}));
app.set('view engine', 'hbs');

const cats = require('./cats')
app.use(bodyParser.urlencoded({extended: false}))
app.get('/', (req, res) => {
    let name = 'Something';
    res.render('home', { name })
})

app.get('/cats', (req, res) => {
    res.render('cats', {cats: cats.getAll()})
})

app.post('/cats', (req, res) => {
    let catName = req.body.cat;
    cats.add(catName)

    res.redirect('/cats')
})
app.listen(5000, () => {
    console.log('this server is running on port 5000');
})