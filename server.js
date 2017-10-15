const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mainCtrl = require('./mainCtrl');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.get('/', mainCtrl.getApp);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`The server is running on ${port}`));
