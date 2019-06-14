//importing dependencies

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

const app = express();

const {startDatabase} = require('./database/mongo');
const {insertAd, getAds} = require('./database/ads');

const ads = [
{title: 'Hello, world 2'},
{title: 'hippie kay yey'}
];

// adding Helmet to enhance your API's security
app.use(helmet());
// using bodyParser to parse JSON bodies into JS objects
app.use(bodyParser.json());
// enabling CORS for all requests
app.use(cors());
// adding morgan to log HTTP requests
app.use(morgan('combined'));


app.get('/', async (req,res) => {
    res.send(await getAds());
});

startDatabase().then(async () => {
    await insertAd({title: 'Hello, now from the in-memory database!'});

app.listen(3001, async ()=>{
    console.log('listening on port 3001');
    });
});