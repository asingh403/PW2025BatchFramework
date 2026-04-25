import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';


test('verify valid login', async({ page }) => {

  let loginPage = new LoginPage(page);
  await loginPage.goToLoginPage();
  loginPage.doLogin()

})