# REALIZAÇÃO DE TESTE FRONTEND [Airport Cloud Coverage-App]

Para a realização deste projeto, foram utilizados as seguintes tecnologias separas por arquivos de pasta:

* Frontend
  * React
  * React Bootstrap
  * Axios
  * Node Sass
  * Font awesome React

* Backend  
  * Node
  * Express
  * Cors
  * Morgan
  * Nodemon

Como se vê, o projeto contempla duas pastas distintas, sendo a ``Frontend`` responsável pelo exibição do projeto em um navegador e a ``Backend`` responsável por manter um servidor Node que sustenta e serve endpoints API


## Instalação

Ao clonar o projeto, abra duas abas do terminal apontando para os diretórios ``Frontend`` e ``Backend``. Para ambas as situações, rode o comando:

``npm install``

Todas as dependências listadas no arquivo ``package.json`` serão instaladas.

## Rodando o projeto [Let's Rock & Roll]

Após isso, ainda nos diretórios citados rode o comando ``npm start``.

Para um bom funcionamento do projeto, o ideal é rodar primeiro o diretório ``Backend`` para depois rodar o diretório ``Frontend``.

O diretório ``Frontend`` irá rodar o ``React`` e abrir o navegador automaticamente na URL ``http://localhost:3000/``. Já o diretório ``Backend`` irá rodar o projeto por "baixo dos panos" na url ``http://localhost:7293``. Isso significa que o navegador não será aberto automaticamente como acontece com o React, porém se você acessar a url citada, verá um array de números gerados aleatoriamente que servirá como base para posicionar as nuvens e aeroportos na grade do território criado.
