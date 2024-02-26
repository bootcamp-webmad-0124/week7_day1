const express = require('express')
const logger = require('morgan')

const app = express()

// Middlewares
app.use(logger('dev'))
app.use(express.static('public'))
app.use(express.json())


// Routes
app.get('/', (req, res) => {                // envío de archivo
    res.sendFile(`${__dirname}/views/home-page.html`)
})

app.get('/gatos', (req, res) => {           // envío de archivo
    res.sendFile(`${__dirname}/views/cats-page.html`)
})

app.get('/api/datos', (req, res) => {       // envío de json

    const student = {
        name: "Jane Doe",
        age: 33,
        profession: "Developer"
    }

    res.json(student)
})


// Server listen
app.listen(5005, () => console.log('Express levantado en el puerto 5005'))