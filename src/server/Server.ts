import express from 'express';

const server = express();

server.get('/', (req, res) => res.send('Ola Mundo!!🔥'));

export { server };
