import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ResultPage } from '../pages/ResultPage';

// 3. Page actions/methods:
// test@123, test_123@open.com

let searchData = [
    {searchKey: 'macbook', resultsCount: 3},
    {searchKey: 'samsung', resultsCount: 2},
    {searchKey: 'iMac', resultsCount: 3},
    {searchKey: 'canon', resultsCount: 3},
    {searchKey: 'Automation', resultsCount: 3},
];


test('verify product search', async({ page }) => {

  let loginPage = new LoginPage(page);
  await loginPage.goToLoginPage();
  let homePage = await loginPage.doLogin('test_123@open.com', 'test@123');
  let resultPage: ResultPage = await homePage.doSearch('test');
  expect(await resultPage.getSearchResultCount()).toBe(0);
})
