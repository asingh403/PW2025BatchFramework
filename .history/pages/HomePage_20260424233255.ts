import { Locator, Page } from '@playwright/test';
import { ElementUtil } from '../utils/ElementUtil';


export class HomePage{

    //Page locators/Objects/Object Reference
    private readonly page:Page;
    private readonly eleUtil:ElementUtil;
    private readonly logoutLink:Locator;
    private readonly search:Locator;
    private readonly searchIcon: Locator;
    

    constructor(page:Page){
        this.page = page;
        this.eleUtil = new ElementUtil(page);
    }

    












}