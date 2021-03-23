const express = require('express');
const handlebars = require('express-handlebars');

const app = express();

app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');


app.get('/', (req, res) => {
    res.send('Hello express!')
})

app.listen(5000, () => {
    console.log('this server is running on port 5000');
})