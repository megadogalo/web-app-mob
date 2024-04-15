const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para analisar corpos de solicitação
app.use(bodyParser.json());

// Rota para obter os dados dos jogos
app.get('/api/games', (req, res) => {
    const gamesFilePath = path.join(__dirname, 'games.json');
    fs.readFile(gamesFilePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Erro ao ler o arquivo JSON:', err);
            res.status(500).json({ error: 'Erro ao ler o arquivo JSON' });
            return;
        }
        res.json(JSON.parse(data));
    });
});

// Inicie o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
