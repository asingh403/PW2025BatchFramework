import { Locator, Page } from '@playwright/test';
import { ElementUtil } from '../utils/ElementUtil';
import { HomePage } from "../pages/HomePage";
import { RegistrationPage } from '../pages/RegistrationPage';


export class LoginPage{

    //Page locators/Objects/Object Reference
    private readonly page:Page;
    private readonly eleUtil;
    private readonly emailId:Locator;
    private readonly password:Locator;
    private readonly loginBtn:Locator;
    private readonly warningMsg:Locator;
    private readonly registerLink:Locator;
    

    constructor(page:Page){
        this.page = page;
        this.eleUtil = new ElementUtil(page);
        this.emailId = page.getByRole('textbox', { name: 'E-Mail Address' });
        this.password = page.getByRole('textbox', { name: 'password' });
        this.loginBtn = page.locator(`input[type = "submit"][value="Login"]`);
        this.warningMsg = page.locator(`#account-login > div.alert`);
        this.registerLink = page.getByRole('link', { name: 'Register' });;
    }

    

    /**
     * this method we will launch the PW browser and open the target URL
     */
    async goToLoginPage(baseURL:string | undefined){
        await this.page.goto(baseURL+'?route=account/login');
    }

    /**
     * @param email 
     * @param password 
     * @returns : page title
     */
    async doLogin(email:string, password:string):Promise<HomePage>{
        await this.eleUtil.fill(this.emailId, email);
        await this.eleUtil.fill(this.password,password);
        await this.eleUtil.click(this.loginBtn, { force: true, timeout: 5000 });
        return new HomePage(this.page);
    }

    /**
     * This method will get the error message
     * @returns : string as error message
     */
    async getInvalidLoginMessage():Promise<string | null>{
        const errorMsg = await this.eleUtil.getText(this.warningMsg);
        console.log('invalid login warning message ' + errorMsg);
        return errorMsg;
    }

    async navigateToRegistrationPage():Promise<RegistrationPage>{
        await this.eleUtil.click(this.registerLink, {force: true});
        return new RegistrationPage(this.page);
    }
















}