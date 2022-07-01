import { config } from 'dotenv';
import express, { Express } from 'express';
import cors from 'cors';
import session from 'express-session';
import passport from 'passport';
import routes from '../routes'; 
config();
require('../strategies/discord');

export function createApp(): Express {
    const app = express();
    // Enable Parse Middlewares for Requests
    app.use(express.json());
    app.use(express.urlencoded());

    // Eanble CORS
    app.use(cors({ origin: ['http://localhost:3000'], credentials: true, }));

    app.use(
        session({
            secret: 'ASKDFNIQURCCKJNSOJFQOPFJOKLFJCQWIOFJIO',
            resave: false,
            saveUninitialized: false,
            cookie: { maxAge: 604800000, }
        })
    );

    app.use(passport.initialize());
    app.use(passport.session());

    app.use('/api', routes);
    return app;
}
