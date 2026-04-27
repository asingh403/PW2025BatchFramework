import { ResultPage } from '../pages/ResultPage';
import { test, expect } from '../fixtures/baseFixtures';
// 3. Page actions/methods:
// test@123, test_123@open.com

/**
 * this is my dataprovided for product search key
 */
let searchData = [
    {searchKey: 'macbook', resultsCount: 3},
    {searchKey: 'samsung', resultsCount: 2},
    {searchKey: 'iMac', resultsCount: 1},
    {searchKey: 'canon', resultsCount: 1},
    {searchKey: 'foo', resultsCount: 0},
];

for(let product of searchData){
test(`verify product search ${product.searchKey}`, async({ homePage }) => {

  let resultPage: ResultPage = await homePage.doSearch(product.searchKey);
  expect(await resultPage.getSearchResultCount()).toBe(product.resultsCount);
 });
}



