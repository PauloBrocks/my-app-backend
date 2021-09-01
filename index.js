const express = require('express');

const app = express();

app.get('/', (request, response) => {
    return response.json({
        nome: 'Paulo',
        sobrenome: 'Brocks'
    });
});

app.listen(3333);