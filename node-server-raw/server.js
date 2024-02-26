const http = require("http")

const server = http.createServer((req, res) => {

    if (req.url === '/') {
        res.write('<h1>Me lo pico todo aquí voy a morir D:</h1>');
    } else {
        res.statusCode = 404;
        res.write('404 Page');
    }

    res.end()
})

server.listen(5005, () => {
    console.log("Server running on port 5005");
})