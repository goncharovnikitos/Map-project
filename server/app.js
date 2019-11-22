import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import session from 'express-session';

import { serverPort } from './config.json';

import * as db from './utils/DataBaseUtils';

// Initialization of express application
const app = express();

// Set up connection of database
db.setUpConnection();

// Using bodyParser middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser());

var sess = {
    secret: 'keyboard cat',
    cookie: {}
};

if (app.get('env') === 'production') {
    app.set('trust proxy', 1); // trust first proxy
    sess.cookie.secure = true; // serve secure cookies
}

app.use(session(sess));

// Allow requests from any origin
app.use(cors({ origin: '*' }));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// RESTful api handlers
app.get('/users', (req, res) => {
    db.listUsers().then(data => res.send(data));
});

app.get('/get-login', (req, res) => {
   res.send(session.user_id || 'guest');
});

app.post('/new-user/', (req, res) => {
    let validate = db.validateUser(req.body);
    if (validate !== true){
        res.send(validate);
        return;
    }
    db.createUser(req.body).then(function(data) {
        let user_id = (data && data._id) ? data._id : null;
        session.user_id = user_id;
        res.send(user_id ? 'ok' : 'error');
    });
});

app.get('/logout', (req, res) => {
    session.user_id = 'guest';
    res.send('ok');
});

app.post('/login', (req, res) => {
    db.loginUser(req.body.login, req.body.password).then(function(data) {
        console.log(data);
        let user_id = (data && data._id) ? data._id : null;
        session.user_id = user_id;
        res.send(user_id ? 'ok' : 'Пользователь не найден');
        // res.send(data);
    });
});

/*app.post('/findLocation', (req, res)) => { 
    db.find(req._id).then(data => res.send())
}*/

/*app.delete('/User/:id', (req, res) => {
    db.deleteNote(req.params.id).then(data => res.send(data));
});*/

const server = app.listen(serverPort, function() {
    console.log(`Server is up and running on port ${serverPort}`);
});

