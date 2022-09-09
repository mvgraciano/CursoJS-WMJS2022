const port = 3003

const express = require('express')
const db = require('./database')
const app = express()

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

// app.use((req, res, next) => {
//     res.send('Default application method')
// })

// app.get('/produtos', (req, res, next) => {
//     console.log('Middleware 1...');
//     next()
// })


app.get('/produtos', (req, res, next) => {
    res.send(db.getProdutos())
    next();
})

app.get('/produtos/:id', (req, res, next) => {
    res.send(db.getProduto(req.params.id))
})

app.post('/produtos', (req, res, next) => {
    const produto = db.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto)
})

app.put('/produtos/:id', (req, res, next) => {
    const produto = db.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto)
})

app.delete('/produtos/:id', (req, res, next) => {
    const produto = db.removerProduto(req.params.id)
    res.send(produto)
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})