const express = require('express');
require('dotenv').config();
const indexRouter = require('./routes/index');

const app = express();
const port = process.env.PORT;
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/api', indexRouter);

app.listen(port, () => {
    console.log('App listening on port ' + port);
})