import 'dotenv/config'; // apply env vars
import express from 'express';
import cors from 'cors';
import imageRouter from './images/images.routes';

//config
//process.env.PORT --> the live server port
const PORT = process.env.PORT || 9876; 

//create the server
const server = express();

//config JSON support
server.use(express.json());
server.use(cors());

//using routes
server.use('/api/image', imageRouter);

//run the server
server.listen(PORT, () => console.log(`[Server] http://localhost:${PORT}`));