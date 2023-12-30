class HorizontalOM {
  setingRangeSlider() {
   return cy.get('input[type="range"]').then((slider) => {
        const newValue = 2.5;
        cy.wrap(slider).invoke("val", newValue).trigger("input");
  
        cy.get("#range").invoke("text", newValue);
      });
  }
}

export default HorizontalOM;
