const express = require('express');

const handlebars = require('express-handlebars');

const path = require('path');

// http logger
const morgan = require('morgan');

const dotenv = require('dotenv');

dotenv.config();

const app = express();

const route = require('./resources/routes/index.router');

// app.use(morgan('combined'));

app.set('port', process.env.PORT || 3000);

// set css directory
app.use(express.static(path.join(__dirname, 'public')));

// middleware xu ly du lieu tu form gui len
app.use(express.urlencoded({ 
    extended: true 
}));
app.use(express.json());

const port = app.get('port');

// set directory for engine
app.set('views', path.join(__dirname, 'resources/views'));

// template engine
app.engine('hbs', handlebars({
    extname: '.hbs'
}));
app.set('view engine', 'hbs');

// Route init
route(app);

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
