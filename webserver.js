import { createServer } from 'http'; 
const hostname = '127.0.0.1'; //내 컴퓨터의 IP 
const port = 3000; 
const server = createServer((req, res) => {
     res.statusCode = 200; 
     res.setHeader('Content-Type', 'text/plain'); 
     res.end('Hello World\n'); 
    }); 
    
//port 번호와 IP를 통해서 접근한다. 
server.listen(port, hostname, () => { 
    console.log(`Server running at http://${hostname}:${port}/`); 
});

