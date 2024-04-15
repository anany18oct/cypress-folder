describe('Pagination',function(){
    it('pagination of Table',function(){
        cy.visit('https://datatables.net/examples/basic_init/alt_pagination.html');
        cy.get("#example");
        cy.get('#example_info').then((e)=>{
            let mytext = e.text();//find the number of pages
            let TotalPages = mytext.substring(mytext.indexOf("")+1,mytext.indexOf("entries")-1);
            cy.log("Total number of Pages in Table----->"+ TotalPages);
        })
        let TotalPages=5;
        for(let p=1;p<=5;p++)
        {
            if(TotalPages>1){
                cy.log("Active Page ====>"+p);
                cy.get("div[class='dt-paging paging_simple_numbers']>button:nth-child("+p+")").click();
                cy.wait(3000);
                cy.get("#example").each(($row,index,$rows)=>{
                    cy.wrap($row).within(()=>{
                        cy.get('td:nth-child(2)').then((e)=>{
                            cy.log(e.text());
                        })
                        
                    })
                })

            }
        }
        

    })
})