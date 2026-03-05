// Check the README.md file for instructions to the exercise

import http from 'http';
import fs from 'fs';
import path from 'path';

const PORT = 3000;

const server = http.createServer((req, res) => {
    if(req.url === '/view-image' && req.method === 'GET') {
        const imagePath = path.join(__dirname, 'images', 'veryhappydog.jpg');

        fs.readFile(imagePath, (err, data) => {
            if (err) {
                res.writeHead(404, { 'content-type': 'text/plain' });
                res.end('Error! Image not found.');
                return
            }

            res.writeHead(200, { 'content-type': 'image/jpeg' });
            res.end(data);
        });
    } else {
        res.writeHead(404, { 'content-type': 'text/plain' });
        res.end('Route not found.');
    }
});

server.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}/view-image`);
});