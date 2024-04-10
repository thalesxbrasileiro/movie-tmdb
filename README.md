# MoviesTmdb 🎥

Este é um projeto Angular para exibir informações sobre filmes utilizando a API do TMDb (The Movie Database).

## Pré-requisitos

Antes de começar, certifique-se de ter o Node.js e o Angular CLI instalados em sua máquina.

- **Node.js**: [Download aqui](https://nodejs.org/)
- **Angular CLI**: Instale usando o npm (Node Package Manager) com o comando:

```
npm install -g @angular/cli
```


## Instalação

Siga estes passos para configurar e executar o projeto localmente:

1. Clone este repositório:
```
git clone https://github.com/seu-usuario/MoviesTmdb.git
```
3. Navegue até o diretório do projeto:
```
cd MoviesTmdb
```
5. Instale as dependências:
```
npm install
```


## Configuração da API

Este projeto utiliza a API do TMDb para obter informações sobre filmes. Para utilizar a API, é necessário obter uma chave de API do TMDb.

1. Acesse [https://www.themoviedb.org/documentation/api](https://www.themoviedb.org/documentation/api) para criar uma conta e gerar uma chave de API.

2. Crie um arquivo `src/environments/environment.ts` e adicione sua chave de API:
```typescript
export const environment = {
  production: false,
  tmdbApiKey: 'SUA_CHAVE_DE_API_AQUI'
};
```

3. Executando o Servidor de Desenvolvimento
Após instalar e configurar a chave de API, você pode iniciar o servidor de desenvolvimento:

```
ng serve
```

4. Acesse a aplicação em seu navegador através do endereço:

```
http://localhost:5500/
```

## Funcionalidades

- Página Inicial: Exibe uma lista de filmes populares.

- Detalhes do Filme: Clique em um filme para ver detalhes como título, descrição e data de lançamento.

- Busca de Filmes: Busque filmes por título.

- Responsivo: O aplicativo é otimizado para dispositivos móveis.

## Licença ⚖️
Este projeto está licenciado sob a MIT License. Consulte o arquivo LICENSE para mais detalhes.
