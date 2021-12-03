import express from 'express';
import userRoute from './routes/user';
import productRoute from './routes/product';
import mongoose from 'mongoose';
import config from './config/config';

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
        // setting the cores here
    }

    private database (): void {

        // connect to mongoodb here
        mongoose.connect(config).then(()=> {
            console.log('connected to the database');
        }).catch((err) => {
            console.log('MongoDB connection error. Please make sure MongoDB is running. ' + err)
        });
    }

    private routes (): void {

        // setting the routes of the application
        this.express.use('/user', userRoute);
        this.express.use('/product', productRoute);
    }

}

export default new App().express;