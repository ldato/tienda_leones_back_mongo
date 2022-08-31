const express = require('express');
require('dotenv').config();
const indexRouter = require('./routes/index');
const cors = require('cors');

const app = express();
const port = process.env.PORT;
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/api', indexRouter);

app.listen(port, () => {
    console.log('App listening on port ' + port);
})