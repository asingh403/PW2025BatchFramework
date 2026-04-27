import { test as base, expect } from '@playwright/test';
import { HomePage } from "../pages/HomePage";
import { LoginPage } from '../pages/LoginPage';

type MyFixtures ={
    homePage:HomePage;
};

/**
 * test is overridden
 */
export const test = base.extend<MyFixtures>({
    homePage:async({ page, baseURL}, use, testInfo) =>{

        const loginPage = new LoginPage(page);
        await loginPage.goToLoginPage(baseURL);

        const username:string =testInfo.project.metadata.appUserName;
        const password:string =testInfo.project.metadata.appPassword;

        const homePage=await loginPage.doLogin(username, password);
        expect(await homePage.isUserLoggedIn()).toBeTruthy();

        await use(homePage);

    }
});

export{ expect };

