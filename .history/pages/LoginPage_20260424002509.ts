import { Locator, Page } from '@playwright/test';

export class LoginPage{

    //Page locators/Objects/Object Reference
    private readonly page:Page;
    private readonly emailId:Locator;
    private readonly password:Locator;
    private readonly loginBtn:Locator;
    private readonly warning 

    constructor(page:Page){
        this.page = page;
        this.emailId = page.getByRole('textbox', { name: 'E-Mail Address' });
        this.password = page.getByRole('textbox', { name: 'password' });
        this.loginBtn = page.locator(`input[type = "submit"][value="Login"]`);
        





    }














}