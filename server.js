const express = require('express');
const crypto = require('crypto');
const cors = require('cors'); // Adicionando o módulo cors
const app = express();
const port = 3000;

app.use(express.static('public'));


app.use(cors());

app.get('/gerar-senha', (req, res) => {
    const tamanho = req.query.tamanho || 12;
    const numeros = req.query.numeros !== 'false';
    const maiusculo = req.query.maiusculo !== 'false';
    const especiais = req.query.especiais !== 'false';

    const senha = gerarSenha(tamanho, numeros, maiusculo, especiais);
    res.send({ senha });
});

function gerarSenha(tamanho, numeros, maiusculo, especiais) {
    let letras = 'abcdefghijklmnopqrstuvxwyz';
    if (numeros) letras += '0123456789';
    if (maiusculo) letras += 'ABCDEFGHIJKLMNOPQRSTUVXWQYZ';
    if (especiais) letras += '!@#$%^&*()-=_+[]{}|;:,.<>?';

    let senha = '';
    for (let i = 0; i < tamanho; i++) {
        const indice = crypto.randomInt(0, letras.length);
        senha += letras.charAt(indice);
    }

    return senha;
}

app.listen(port, () => {
    console.log('servidor rodando na porta 3000');
});
