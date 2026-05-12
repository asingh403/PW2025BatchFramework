import { LoginPage } from '../pages/LoginPage';
import { test, expect } from '../fixtures/baseFixtures';

// 3. Page actions/methods:
// test@123, test_123@open.com

test('verify valid login @sanity @dev', async({ homePage }) => {
  await expect(homePage.page).toHaveTitle('My Account');
})


test('verify invalid login @login @dev',
  {
    // tag: ['@product', '@sanity', '@regression'],

    annotation:[
      {type: 'epic', description: 'EPIC-12345 - Desing open Cart application'},
      {type: 'feature', description: 'Open Cart Login'},
      {type: 'story', description: 'US-506 - user can login the apps'},
      {type: 'severity', description:'Blocker'},
      {type: 'owner', description:'Ashutosh Singh'},
    ]
  }
  , async({ page, baseURL }) => {

  let loginPage = new LoginPage(page);
  await loginPage.goToLoginPage(baseURL);
  await loginPage.doLogin('test_123@open.com', 'test@123456');
  const errorMessage = await loginPage.getInvalidLoginMessage();
  expect(errorMessage).toContain('Warning: No match for E-Mail Address and/or Password.');

})