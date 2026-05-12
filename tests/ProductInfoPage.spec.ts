import { LoginPage } from "../pages/LoginPage";
import { ResultPage } from "../pages/ResultPage";
import { ProductInfoPage } from "../pages/ProductInfoPage";
import { test, expect } from '../fixtures/baseFixtures';

// 3. Page actions/methods:
// test@123, test_123@open.com

let search = [
  { searchKey: "macbook", productName: "MacBook Pro", imageCount: 4 },
  { searchKey: "macbook", productName: "MacBook Air", imageCount: 4 },
  { searchKey: "samsung",productName: "Samsung Galaxy Tab 10.1",imageCount: 7 },
];

for (let product of search) {
  test(`verify product Header ${product.productName}, {tag:['@product', '@sanity', '@regression']}`, async ({ homePage }) => {
    let resultPage: ResultPage = await homePage.doSearch(product.searchKey);

    let productInfoPage: ProductInfoPage = await resultPage.selectProduct(
      product.productName,
    );

    expect(await productInfoPage.getProductHeader()).toBe(product.productName);
  });
}

for (let product of search) {
  test(`verify product Images ${product.productName} : ${product.imageCount}, {tag:['@product', '@sanity', '@regression']}`, async ({ homePage }) => {

    let resultPage: ResultPage = await homePage.doSearch(product.searchKey);

    let productInfoPage: ProductInfoPage = await resultPage.selectProduct(
      product.productName,
    );

    expect(await productInfoPage.getProductImagesCount()).toBe(
      product.imageCount,
    );
  });
}
  test(`verify product Metadata @dev`, async ({ homePage }) => {

    let resultPage: ResultPage = await homePage.doSearch('macbook');

    let productInfoPage: ProductInfoPage = await resultPage.selectProduct('MacBook Pro');

    let actualProductFullDetails = await productInfoPage.getProductDetails();
    
    expect.soft(actualProductFullDetails.get('header')).toBe('MacBook Pro');
    expect.soft(actualProductFullDetails.get('Brand')).toBe('Apple');
    expect.soft(actualProductFullDetails.get('Product Code')).toBe('Product 18');
    expect.soft(actualProductFullDetails.get('Reward Points')).toBe("800");
    expect.soft(actualProductFullDetails.get('Availability')).toBe('Out Of Stock');
     
  });


  test(`verify product Pricing @dev`, async ({ homePage }) => {
    
    let resultPage: ResultPage = await homePage.doSearch('macbook');

    let productInfoPage: ProductInfoPage = await resultPage.selectProduct('MacBook Pro');

    let actualProductFullDetails = await productInfoPage.getProductDetails();
    
    expect.soft(actualProductFullDetails.get('header')).toBe('MacBook Pro');
    expect.soft(actualProductFullDetails.get('price')).toBe('$2,000.00');
    expect.soft(actualProductFullDetails.get('extaxprice')).toBe('$2,000.00');
     
  });

