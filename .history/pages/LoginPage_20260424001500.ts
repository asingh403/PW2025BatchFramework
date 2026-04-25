import { Locator, Page } from '@playwright/test';

export class LoginPage{

    //Page locators/Objects/Object Reference
    private readonly page:Page;
    private readonly email:Locator;
    private readonly emailId:Locator;
    private readonly password:Locator;
    private readonly loginBtn:Locator;

    constructor(page:Page){
        this.page = page;
        this.email = page.getByRole('textbox', { name: 'E-Mail Address' });
        this.password = page.getByRole('textbox', { name: 'password' });
        this.loginBtn = page.locator





    }














}