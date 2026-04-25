import { Locator, Page } from '@playwright/test';
import { ElementUtil } from '../utils/ElementUtil';


export class LoginPage{

    //Page locators/Objects/Object Reference
    private readonly page:Page;
    private readonly eleUtil;
    private readonly emailId:Locator;
    private readonly password:Locator;
    private readonly loginBtn:Locator;
    private readonly warningMsg:Locator;
    

    constructor(page:Page){
        this.page = page;
        this.eleUtil = new ElementUtil(page);
        this.emailId = page.getByRole('textbox', { name: 'E-Mail Address' });
        this.password = page.getByRole('textbox', { name: 'password' });
        this.loginBtn = page.locator(`input[type = "submit"][value="Login"]`);
        this.warningMsg = page.locator(`#account-login > div.alert`);
    }

    

    /**
     * this method we will launch the PW browser and open the target URL
     */
    async goToLoginPage(){
        await this.page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
    }













}