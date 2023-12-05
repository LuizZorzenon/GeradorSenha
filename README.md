# Gerador de Senhas Aleatórias com Express

# Descrição
Este projeto consiste em uma aplicação Node.js que utiliza o framework Express para criar um servidor capaz de gerar senhas aleatórias com base em parâmetros específicos. A aplicação também emprega o módulo cors para facilitar solicitações de diferentes origens.

# Configuração
Antes de iniciar, certifique-se de ter o Node.js instalado. Em seguida, instale as dependências necessárias:


-- npm install express crypto cors

# Funcionalidades
Endpoint para Gerar Senha:

O endpoint GET /gerar-senha permite a geração de senhas personalizadas.
Parâmetros de consulta:
tamanho: Tamanho da senha (padrão: 12).  
numeros: Incluir números na senha (padrão: true).  
maiusculo: Incluir letras maiúsculas na senha (padrão: true).  
especiais: Incluir caracteres especiais na senha (padrão: true).  
Exemplo de requisição: 


curl http://localhost:3000/gerar-senha?tamanho=16&numeros=true&maiusculo=true&especiais=true
Exemplo de resposta:

json
Copy code
{
  "senha": "Aa1!bB2@cC3"
}
# Como Executar
Para iniciar o servidor, utilize o seguinte comando:

-- node nome-do-arquivo.js
O servidor estará disponível em http://localhost:3000.

#Observações
Os arquivos estáticos na pasta 'public' podem ser acessados em http://localhost:3000/nome-do-arquivo.
Licença
Este projeto está licenciado sob a Licença MIT.

Autor
Luiz Zorzenon

Aproveite! 😊
