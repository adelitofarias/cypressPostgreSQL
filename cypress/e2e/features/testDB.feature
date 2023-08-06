Feature: Teste de conexao PostgreSQL

    @smoke @test
    Scenario: Inserir um cliente na base
        Given que realize a insercao de uma cliente
        When executar a consulta, o retorno devera ser igual a "Nome Cliente"