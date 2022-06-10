const express = require('express');
const req = require('express/lib/request');

const app = express();

// middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.get('api/libros', (req, res) => res.json({
    nombre:"prueba"
}))

// Routes
app.use(require('./routes/index'));

app.listen(3000);
console.log('Server on port', 3000);