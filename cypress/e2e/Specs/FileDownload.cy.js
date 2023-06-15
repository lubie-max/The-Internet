/// <reference types="Cypress" />


// import EntryAdOM from "../PageObjectModels/EntryAdOM"
import 'cypress-downloadfile/lib/downloadFileCommand';
// import { event } from 'cypress/types/jquery';


describe('Download', function(){

    // const POM = new EntryAdOM()
   
    it('Download File', function(){

        cy.visit(Cypress.env('baseUrl')+"download")

        const filePath = 'cypress\downloads';

        // cy.contains('a', 'Testing').should('have.attr','href')
        // cy.contains('a', 'text').click()
        // cy.get('[href="download/Testing.txt"]').click()
        // cy.get('[href="download/icon.png"]')


        // cy.get('a').eq(4).then(($link)=>{
        //     $link[0].addEventListener('load',(event)=>{
        //         event.preventDefault();
        //     })
        //     cy.log($link[0])
        //     cy.wrap($link).click()
            
        // })

        // final approach =:

        // cy.get('.example a').each((link) => {
        //     const href = link.attr('href');
        //     const fileName = href.split('/').pop(); // Extract the file name from the href
            
        //     cy.request({
        //       url: href,
        //     //   encoding: 'binary',
        //     }).then((response) => {
        //       // Validate that the response is successful and the file is not empty
        //       expect(response.status).to.eq(200);
        //     //   expect(response.body).to.have.length.above(0);
              
        //       // Save the file using Cypress' writeFile command
        //     //   cy.writeFile(fileName, response.body, 'binary');
              
        //       // Validate that the file has been downloaded successfully
        //     //   cy.readFile(fileName).should('exist');
        //     });
        //   });


        //final 

//         const allowedExtensions = ['.png']; // Specify the allowed file extensions

// cy.get('#content .example a').each((link) => {
//   const href = link.attr('href');
//   const fileName = href.split('/').pop(); // Extract the file name from the href
//   const fileExtension = fileName.substring(fileName.lastIndexOf('.'));
  
//   if (allowedExtensions.includes(fileExtension)) {
//     cy.request({
//       url: href,
//     //   encoding: 'binary',
//     }).then((response) => {
//       // Validate that the response is successful and the file is not empty
//       expect(response.status).to.eq(200);
//     //   expect(response.body).to.have.length.above(0);
      
//       // Save the file using Cypress' writeFile command
//     //   cy.writeFile(fileName, response.body, 'binary');
      
//       // Validate that the file has been downloaded successfully
//       cy.readFile(fileName).should('exist');
//     });
//   }
// });

        
          
          


        // cy.intercept('GET', 'https://the-internet.herokuapp.com/download/').as('downloadRequest'); 
        // cy.get('a').eq(4).click((event) => {
        //     event.preventDefault();
        // })
        
        // .then((response)=>{
        //     response[0].addEventListener('',(event)=>{
        //         event.preventDefault();
        //     })
        // }).click({force:true});


        
        // .then((response)=>{
        //     // const atr = cy.wrap(response).invoke('re')
        //     // cy.log(atr)

        //     const link = response.attr('href');

        //     // cy.wrap(link).click()
        //     cy.log(link)

            
        //     // atr.click({force: true})
        // })
        
        // .then((link) => {
        //     const href = link.attr('href');
        //     link.attr('href', 'javascript:void(0)');
        //     link[0].click();
        //     link.attr('href', href);
            
        //   }).click();

        // invoke('removeAttr','target')

        // cy.wait(('@downloadRequest')).then((res)=>{
        //     cy.log(res.headers)
        // })

        // cy.get('#content .example  a').each((elm , i , list)=>{
        //     cy.get('a').eq(3).click().then((res)=>{
        //         cy.log(res);
        //     })

        //     cy.debug()
            
        // })
        // cy.get('#content .example  :last-child').click({force:true})
        // cy.get('a :last-child').click()
        // cy.get('[href="download/image.jpg"]')




        // cy.readFile()

        // cy.downloadFile('cypress\downloads').then((filePath) => {
        //     // Assertion: Check if the file is downloaded successfully
        //     expect(filePath).to.exist;
        //   });
       

        // cy.waitUntil(() => {
        //     // Use a condition to check if the file exists
        //     return cy.task('isFileDownloaded', filePath).then((isDownloaded) => {
        //       // Use an assertion to check if the file is downloaded
        //       expect(isDownloaded).to.be.true;
        //       return true; // Signal that the wait is complete
        //     });
        //   });
        
        // cy.log('@download')
        
        // cy.request('https://the-internet.herokuapp.com/download','GET',{},{})
        // .then((interception) => {
        //     const response = interception.response;
        //     cy.log(response)

        // })

        // cy.request('GET', 'https://the-internet.herokuapp.com/download').then((response) => {
        //     const statusCode = response.status;
        //     expect(statusCode).to.equal(200); // Example assertion
          
        //     const responseBody = response.body;
        //     // Perform assertions or further processing on the response body
          
        //     const headers = response.headers;
        //     // Access response headers if needed
          
        //     // Perform additional assertions or processing based on your specific requirements
        //   });





        cy.get('[href="download/test1.pdf"]')
    })

   
})