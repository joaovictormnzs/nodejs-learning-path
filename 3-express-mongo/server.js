import http from "http";

const PORT = 3000; // -> porta de comunicacao

const rotas = {
    "/": "Curso de Express API",
    "/livros": "Entrei na rota livros",
    "/autores": "Entrei na rota autores"
}

const server = http.createServer((req, res ) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end(rotas[req.url]); // --> url: propriedade do objeto req
});

server.listen(PORT, () => {
    console.log("Servidor escutando!");
});
