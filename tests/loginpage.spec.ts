import { LoginPage } from '../pages/LoginPage';
import { test, expect } from '../fixtures/baseFixtures';

// 3. Page actions/methods:
// test@123, test_123@open.com

test('verify valid login @login @sanity ', async({ homePage }) => {
  await expect(homePage.page).toHaveTitle('My Account');
})


test('verify invalid login', async({ page, baseURL }) => {

  let loginPage = new LoginPage(page);
  await loginPage.goToLoginPage(baseURL);
  await loginPage.doLogin('test_123@open.com', 'test@123456');
  const errorMessage = await loginPage.getInvalidLoginMessage();
  expect(errorMessage).toContain('Warning: No match for E-Mail Address and/or Password.');

})