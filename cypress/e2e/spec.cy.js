
import flipkartHomePage from '../pageObjects/htmlTablePage'
import jsonTestData from '../fixtures/testData.json'
import { before } from "mocha"

var flipkartApplicationUrl = Cypress.env('flipKart_Url')

describe('Login to flipkart and verify the searched item with item in the cart', () => {
  before(() => {
    cy.loginToFlipkart(flipkartApplicationUrl);
  })


  it('login to flipkart and search for iphone and verify searched item with item in the cart',()=>{
    flipkartHomePage.clickOnCrossIconOfFlipkartPopup();
    flipkartHomePage.verifyTitleOfFlipkart(jsonTestData.testData.title)
    flipkartHomePage.enterTheTextInSearchBar(jsonTestData.testData.searchItem);
    flipkartHomePage.addSearchedItemToCartANdVerifySearchedAndCartItems()
  })

})