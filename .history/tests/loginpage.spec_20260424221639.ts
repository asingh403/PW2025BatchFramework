import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

// 3. Page actions/methods:
// test@123, test_123@open.com

test('verify valid login', async({ page }) => {

  let loginPage = new LoginPage(page);
  await loginPage.goToLoginPage();
  const actualTitle = await loginPage.doLogin('test_123@open.com', 'test@123');

})