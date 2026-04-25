import { Locator, Page } from '@playwright/test';
import { ElementUtil } from '../utils/ElementUtil';


export class LoginPage{

    //Page locators/Objects/Object Reference
    private readonly page:Page;
    private readonly eleUtil;
    

    constructor(page:Page){
        this.page = page;
        this.eleUtil = new ElementUtil(page);
    }

    












}