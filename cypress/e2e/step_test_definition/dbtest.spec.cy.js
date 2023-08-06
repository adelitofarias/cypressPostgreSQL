/*describe('PostgreSQL ', ()=>{
    
    it('Insert test', ()=>{
        cy.task("connectDBPostgreSQL", "insert into pedidos values('Test', 4, 850)").then((response)=>{
            console.log(response)
        })
    })


    it('Select test', ()=>{
        cy.task("connectDBPostgreSQL", "Select * From pedidos  Where cliente = 'Test'").then((response)=>{
            
            console.log(response)
            
            cy.log(response)
            cy.log(`Nome cliente: ${response[0].cliente}`)

            expect(response[0].pedido).to.equal(4)
        })
    })


    it('Delete test', ()=>{
        cy.task("connectDBPostgreSQL", "DELETE FROM pedidos	WHERE pedido = 4").then((response)=>{
            console.log(response)
        })
    })

})
*/