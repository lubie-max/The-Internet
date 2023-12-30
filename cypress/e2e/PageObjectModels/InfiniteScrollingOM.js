class InfiniteScrollingOM {
   scrollTo(position) {
     
        return  cy.scrollTo(`${position}`,{duration: 3000})

    }
  }
  
  export default InfiniteScrollingOM;