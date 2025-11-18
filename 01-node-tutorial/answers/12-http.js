const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write("Welcome to our homepage.");
        res.end();
    } else if (req.url === '/about') {
        res.end("Welcome to our about page");
    }
    res.end(
        `<h1>404</h1>
        <p>Page not Found</p>
        <a href='/'>Back to Home</a>`
    );
});

server.listen(3000);