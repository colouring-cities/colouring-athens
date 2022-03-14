import bodyParser from 'body-parser';
import express from 'express';

import autofillController from './controllers/autofillController';

import * as editHistoryController from './controllers/editHistoryController';
import { ApiParamError, ApiUserError } from './errors/api'; 
import { DatabaseError } from './errors/general';
import buildingsRouter from './routes/buildingsRouter';
import multiLingualRouter from './routes/multiLingualRouter';
import extractsRouter from './routes/extractsRouter';
import leaderboardRouter from './routes/leaderboardRouter';
import usersRouter from './routes/usersRouter';
import { queryLocation } from './services/search';
import { authUser, getNewUserAPIKey, logout } from './services/user';
import multiLingualController from './controllers/multiLingualController';

const server = express.Router();

// parse POSTed json body
server.use(bodyParser.json());

server.use('/buildings', buildingsRouter);
server.use('/users', usersRouter);
server.use('/extracts', extractsRouter);
server.use('/leaderboard', leaderboardRouter);

server.get('/history', editHistoryController.getGlobalEditHistory);
// server.get('/autofill', autofillController.getAutofillOptions);

// server.use('/multilingual', multiLingualRouter);
server.use('/multilingualoptions', multiLingualController. getMultiLingualOptions);
server.use('/multilinguallabels', multiLingualController. getMultiLingualLabel);

// POST user auth
server.post('/login', function (req, res) {
    authUser(req.body.username, req.body.password).then(function (user: any) { // TODO: remove any
        if (user.user_id) {
            // req.session.user_id = user.user_id;
            req.session.id = user.user_id;
        } else {
            // req.session.user_id = undefined;
            req.session.id = undefined;
        }
        res.send(user);
    }).catch(function (error) {
        res.send(error);
    });
});

// POST user logout
server.post('/logout', function (req, res) {
    logout(req.session).then(() => {
        res.send({ success: true });
    }).catch(err => {
        console.error(err);
        res.send({ error: 'Failed to end session'});
    });
});

// POST generate API key
server.post('/api/key', function (req, res) {
    // if (!req.session.user_id) {
        if (!req.session.id) {
        res.send({ error: 'Must be logged in' });
        return;
    }
    getNewUserAPIKey(req.session.id).then(function (apiKey) {
    // getNewUserAPIKey(req.session.user_id).then(function (apiKey) {
        res.send(apiKey);
    }).catch(function (error) {
        res.send(error);
    });
});

// GET search
server.get('/search', function (req, res) {
    const searchTerm = req.query.q;
    if (!searchTerm) {
        res.send({
            error: 'Please provide a search term'
        });
        return;
    }
    queryLocation(searchTerm).then((results) => {
        if (typeof (results) === 'undefined') {
            res.send({
                error: 'Database error'
            });
            return;
        }
        res.send({
            results: results.map(item => {
                // map from DB results to GeoJSON Feature objects
                const geom = JSON.parse(item.st_asgeojson);
                return {
                    type: 'Feature',
                    attributes: {
                        label: item.search_str,
                        zoom: item.zoom || 9
                    },
                    geometry: geom
                };
            })
        });
    }).catch(function (error) {
        res.send(error);
    });
});

server.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
    if (res.headersSent) {
        return next(err);
    }

    console.log(res)

    if (err != undefined) {
        if (err instanceof ApiUserError) {
            let errorMessage: string;
            
            if(err instanceof ApiParamError) {
                errorMessage = `Problem with parameter ${err.paramName}: ${err.message}`;
            } else {
                errorMessage = err.message;
            }
            
            return res.status(400).send({ error: errorMessage });
        }
        
        // we need to log the error only if it's not an api user error
        console.log('Global error handler: ', err);
        
        if(err instanceof DatabaseError){
            res.status(500).send({ error: 'Database error' });
        } else {
            res.status(500).send({ error: 'Server error' });
        }
        
    }
});

server.use((req, res) => {
    res.status(404).json({ error: 'Resource not found'});
});


export default server;
