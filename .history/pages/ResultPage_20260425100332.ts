import { Locator, Page } from "@playwright/test";
import { ElementUtil } from "../utils/ElementUtil";
import { LoginPage } from "../pages/LoginPage";


export class ResultPage {
  //Page locators/Objects/Object Reference
  private readonly page: Page;
  private readonly eleUtil:ElementUtil

  /**
   * HomePage Constructor
   * @param page
   */
  constructor(page: Page) {
    this.page = page;
    this.eleUtil = new ElementUtil(page);
    = page.locator('.product-thumb');
  }

//   3. Page actions

  















}
