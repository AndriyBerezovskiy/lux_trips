import 'reflect-metadata';
import express from 'express';
import { createConnection } from 'typeorm';
import cors from 'cors';

import { apiRouter } from './router/apiRouter';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use(apiRouter);

app.listen(5100, async () => {
    console.log('Server has started!!!');

    try {
        const connection = await createConnection();
        if (connection) {
            console.log('Database connected!!!');
        }
    } catch (err) {
        console.log(err);
    }
});
