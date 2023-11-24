var flipkartApplicationUrl = Cypress.env('flipKart_Url')


class Flipkart {

  btnCrossIconOfFlipKart = "//span[@role='button']"
  txtSearch = '.Pke_EE'
  txtSearchResults = "//div[contains(@data-id,'MOBGTAGP')]"
  txtIphone = '._1fQZEK'
  btnAddToCart = "//button[text()='Add to cart']"
  txtSearchedIphone = '.B_NuCI'

  //---method for click on cross icon of the flipkart popup
  clickOnCrossIconOfFlipkartPopup() {
    cy.xpath(this.btnCrossIconOfFlipKart).click();
  }

  //---method for verify title of flipkart
  verifyTitleOfFlipkart(title) {
    cy.title().should('eq', title);
  }

  //---method for enter the search item in search bar
  enterTheTextInSearchBar(searchItem) {
    cy.get(this.txtSearch).type(searchItem + '{enter}');
  }

  //---method for adding searching item to cart and verifying the searched item should match to item in the cart
  addSearchedItemToCartANdVerifySearchedAndCartItems() {
    cy.xpath(this.txtSearchResults).first().invoke('text').then((textOfSearched) => {
      cy.get(this.txtIphone).invoke('attr', 'href').then((href) => {
        cy.visit(flipkartApplicationUrl + href);
        cy.xpath(this.btnAddToCart).click();
        cy.get(this.txtSearchedIphone).invoke('text').then((serchedIphone) => {
          expect(textOfSearched).to.contain(serchedIphone)
        })
      });
    })

  }
}
const flipkartHomePage = new Flipkart();
export default flipkartHomePage;
