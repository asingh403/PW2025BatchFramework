import { Locator, Page } from '@playwright/test';
import { ElementUtil } from '../utils/ElementUtil';


export class HomePage{

    //Page locators/Objects/Object Reference
    private readonly page:Page;
    private readonly eleUtil;
    pr
    

    constructor(page:Page){
        this.page = page;
        this.eleUtil = new ElementUtil(page);
    }

    












}