/// <reference types="cypress" />

import { Given, When } from "@badeball/cypress-cucumber-preprocessor";


Given('que realize a insercao de uma cliente', () => {

  cy.task("connectDBPostgreSQL", "Insert Into pedidos Values('Nome Cliente', 4, 850)")

});


When('executar a consulta, o retorno devera ser igual a {string}', (cliente) => {

  cy.task("connectDBPostgreSQL", `Select * From pedidos  Where cliente = '${cliente}' `).then((response) => {

    cy.log(`O nome do cliente eh: ${response[0].cliente}`)

    expect(response[0].pedido).to.equal(4)

    expect(response[0].cliente).to.have.string(`${cliente}`);
    expect(response[0].valor).to.equal(850);

    cy.task("connectDBPostgreSQL", "DELETE FROM pedidos	WHERE pedido = 4")

  })

});
