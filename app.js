const express = require('express');
const redis = require('redis');
const session = require('express-session');
const redisStore = require('connect-redis')(session);
const client = redis.createClient();
const mongoose = require('mongoose');
const passport = require('passport');
const PORT = process.env.PORT || 5000;
const app = express();

// Passport config
require('./config/passport')(passport);

// DB Config
const db = require('./config/keys').MongoURI;

// Connect to Mongo
mongoose.connect(db, { useNewUrlParser: true })
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));

// Bodyparser
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Express Session
app.use(session({
    secret: 'secret',
    store: new redisStore({ host: 'localhost', port: 6379, client: client, ttl: 260 }),
    resave: false,
    saveUninitialized: false
}));

client.on('connect', () => {
    console.log('Connected to Redis....');
});

app.use(express.static(__dirname + '/client'));

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use('/users', require('./routes/users'));
app.use('/api', require('./routes/api'));

app.listen(PORT, console.log(`Server started on port ${PORT}`));







