// Set up a server using express
const express = require('express');
const app = express();
const logger = require('./logger');
const peopleRouter = require('./routes/people');
const auth = require('./routes/auth.js');

app.use(logger);

// static assets
app.use(express.static('./methods-public'));

// parse form data
app.use(express.urlencoded({ extended: false }));

// parse json
app.use(express.json());

app.use('/api/v1/people', peopleRouter);

app.use('/login', auth);

app.listen(3000, () => {
    console.log('Server is listening on port 3000...');
});