const Joi = require('@hapi/joi');
Joi.objectId = require('joi-objectid')(Joi);
const express = require('express');
const app = express();

const mongoose = require('mongoose');
const path = require('path');
const dotenv = require('dotenv');
dotenv.config();

const cors = require("cors");

const { ShrinkUrl } = require('./models/shrinkUrl');


// routes
const users = require('./routes/users');
const auth = require('./routes/auth');
const shrinkUrl = require('./routes/shrinkUrl');
const shortUrl = require('./routes/shortUrl');
const profile = require('./routes/profile');


// middlewares
app.use(cors());
app.use(express.urlencoded({extended: true}))
app.use(express.json());
app.use('/users', users);
app.use('/auth', auth);
app.use('/shrinkUrl', shrinkUrl);
app.use('/getProfile', profile);

// Serve static files assets on heroku
app.use(express.static(path.join(__dirname, 'client/dist')));


app.get('/:shortUrl', async (req,res) => {
    const shorturl = await ShrinkUrl.findOne({ shortUrl :req.params.shortUrl });
    console.log("i am inside");
    console.log(shorturl)
    if(shorturl === null) return res.sendStatus(404)
    shorturl.clicks ++;
    shorturl.save();
    res.redirect(shorturl.longUrl)
})

// MongoDB connection string
const MONGO_LOCAL_URI = `mongodb://${process.env.MONGODB_USER}:${process.env.MONGODB_PASS}@ds341837.mlab.com:41837/urlshortener`;
mongoose.connect(process.env.MONGOLAB_URI || MONGO_LOCAL_URI)
.then(() => console.log("New connection established"))
.catch(err => console.log('Something went wrong' + err))

console.log("port" + process.env.PORT)
const port = process.env.PORT || 4000;
// Right before your app.listen(), add this:
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname+'/client/dist/index.html'));
  });
app.listen(port, () => console.log(`Listening on port ${port}...`));

