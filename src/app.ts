import express from 'express';
import userRoute from './routes/user';
import productRoute from './routes/product';
import authRoute from './routes/auth';
import mongoose from 'mongoose';
import { connectionString } from './config/config';

class App {

    public express: express.Application;

    public constructor () {
        this.express = express();
        this.middlewares();
        this.database();
        this.routes();
    }

    private middlewares (): void {

        this.express.use(express.json());
        // setting the cors here
    }

    private database (): void {

        // connect to mongoodb here
        mongoose.connect(connectionString).then(()=> {
            console.log('connected to the database');
        }).catch((err) => {
            console.log('MongoDB connection error. Please make sure MongoDB is running. ' + err)
        });
    }

    private routes (): void {

        // setting the routes of the application
        this.express.use('/user', userRoute);
        this.express.use('/product', productRoute);
        this.express.use('/auth', authRoute);
    }

}

export default new App().express;