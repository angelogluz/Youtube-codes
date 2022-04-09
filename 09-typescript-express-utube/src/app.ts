import express from 'express';
import routes from './routes/index';

const app = express();
app.use(express.json());
app.use(routes);

export default app;
