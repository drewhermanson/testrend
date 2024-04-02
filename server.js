const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const helpers = require('./utils/helpers');
const local = require('./strategies/local');
const sequelize = require('./config/connection');


const app = express();
const PORT = process.env.PORT || 3001;

const hbs = exphbs.create({ helpers });

app.use(require('express-session')
  ({
    secret : 'very special secret',
    resave : true,
    saveUninitialized : true
  }));

app.use(require('passport').initialize());
app.use(require('passport').session());


app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);


sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});