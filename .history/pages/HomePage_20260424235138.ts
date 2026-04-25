import { Locator, Page } from '@playwright/test';
import { ElementUtil } from '../utils/ElementUtil';


export class HomePage{

    //Page locators/Objects/Object Reference
    private readonly page:Page;
    private readonly eleUtil:ElementUtil;
    private readonly logoutLink:Locator;
    private readonly loginLink: Locator;
    private readonly search:Locator;
    private readonly searchIcon: Locator;
    
    /**
    * HomePage Constructor
    * @param page 
    */
    constructor(page:Page){
        this.page = page;
        this.eleUtil = new ElementUtil(page);
        this.logoutLink = page.getByRole('link', { name: 'Logout' });
        this.search = page.getByRole('textbox', { name: 'Search' });
        this.searchIcon = page.locator(`#search > span.input-group-btn > button.btn`);
        this.loginLink = page.getByRole('link', { name: 'Login' });
        
    }
    /**
     * @returns : First download link isVisible check
     */
    async isUserLoggedIn(){
        return await this.eleUtil.isVisibile(this.logoutLink, 1);
    }

    /**
     * 
     */

    async logout(){
        await this.eleUtil.click( this.logoutLink, {timeout: 3000}, 1);
        await this.eleUtil.click( this.loginLink, {timeout: 3000}, 1);
        return new LoginPage(page);
    }



    












}