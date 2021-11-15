const express = require('express');
const bodyParser = require('body-parser');


const config = require('../config.js');
const user = require('./components/user/network');
const auth = require('./components/auth/network');
const futbolist = require('./components/futbolist/network');
const team = require('./components/team/network');
const errors = require('../network/errors');

const app = express();

app.use(bodyParser.json());



// ROUER
app.use('/api/user', user);
app.use('/api/auth', auth);
app.use('/api/futbolist', futbolist);
app.use('/api/team', team);


app.use(errors);

app.listen(config.api.port, () => {
    console.log('Api escuchando en el puerto ', config.api.port);
});