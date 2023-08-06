# Projeto de automação de integração com o PostgreSQL adotando o framework Cypress com Cucumber


> Esse é um exemplo de como montar uma estrutura inicial de testes automáticos de integração com a bade de dados PostgreSQL com o auxílio do [`Cypress.io`](https://github.com/cypress-io/cypress) e do [`cypress-cucumber-preprocessor`](https://github.com/badeball/cypress-cucumber-preprocessor) que dá suporte para a escrita dos cenários com as regras gramaticais do Gherkin.


### ✨ Pré-requisitos
-----------------------
- A IDE escolhida foi o [`VS Code`](https://code.visualstudio.com/download);
- Instale o [`Node.js`](https://nodejs.org/en/download/);
- Instale o [`PostgreSQL`](https://www.postgresql.org/download/) 
- Siga as instruções da documentação do [`Cypress.io`](https://github.com/cypress-io/cypress) e do [`cypress-cucumber-preprocessor`](https://github.com/badeball/cypress-cucumber-preprocessor);
- Baixe este repositório ou faça um git clone;
- Abra o diretório do projeto e execute o comando:
    - `npm install`
- Para acionar os testes em modo headless e construir o relatório em ambiente Windowns, insira o arquivo `cucumber-json-formatter.exe` e execute no diretório do projeto:
    - `npm run run`
    - Para maiores detalhes, consutar: [`json-formatter`](https://github.com/cucumber/json-formatter) 
- Pronto, o projeto será executado em sua máquina e construirá o relatório com os resultados dos teste. 😄

![photo1691341247](https://github.com/adelitofarias/cypressPostgreSQL/assets/19351435/750e7f50-c27e-4a78-b626-911450bbf56b)
