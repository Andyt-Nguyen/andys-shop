const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const path = require('path');
const connectionString= "......";
const app = module.exports = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname, '/public')));

const conn = massive.connectSync({connectionString});

app.set('db', conn);
const db = app.get('db');
const mainCtrl = require('./mainCtrl');


app.get('/api/products', mainCtrl.getProducts);
app.post('/api/products', mainCtrl.postProduct);
app.delete('/api/products', mainCtrl.deleteProduct);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`The server is running on ${port}`));
