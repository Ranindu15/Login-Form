const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 4000;
const cors = require('cors');

const mongoose = require('mongoose');
const config = require('./DB.js');
const heroRoute = require('./hero.route');

mongoose.Promise = global.Promise;
mongoose.connect(config.DB, {useNewUrlParser: true}).then(
    ()=> {console.log('DB connected !!')},
    onerror=>{console.log('Not connected' + onerror)}
);

app.use(cors());
app.use(bodyParser.urlencoded({extends: true}));
app.use(bodyParser.json());
app.use('/business', heroRoute);

app.listen(PORT, function () {
   console.log('server running in PORT : ', PORT);
});
