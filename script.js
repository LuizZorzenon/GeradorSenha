function gerarSenha() {
        const tamanho = document.getElementById('tamanho').value;
        const incluirNumeros = document.getElementById('incluirNumeros').checked;
        const incluirMaiusculas = document.getElementById('incluirMaiusculas').checked;
        const incluirEspeciais = document.getElementById('incluirEspeciais').checked;

        fetch(`http://localhost:3000/gerar-senha?tamanho=${tamanho}&numeros=${incluirNumeros}&maiusculo=${incluirMaiusculas}&especiais=${incluirEspeciais}`)
                .then(response => response.json())
                .then(data => {
                        document.getElementById('senha').innerText = `Senha gerada: ${data.senha}`;
                })
                .catch(error => {
                        console.error('Erro ao buscar senha:', error);
                });
}
