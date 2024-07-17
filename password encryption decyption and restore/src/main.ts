import 'dotenv/config'; // apply env vars
import express from 'express';
import cors from 'cors';
import userRoutes from './users/user.routes';

//config
//process.env.PORT --> the live server port
const PORT = process.env.PORT || 9876;

//create the server
const server = express();

//config JSON support
server.use(express.json());
server.use(cors());

//using routes
server.use('/api/users', userRoutes);


//run the server
server.listen(PORT, () => console.log(`[Server] http://localhost:${PORT}`));