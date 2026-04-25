import { Locator, Page } from "@playwright/test";
import { ElementUtil } from "../utils/ElementUtil";
import { LoginPage } from "../pages/LoginPage";

export class ResultPage {
  //Page locators/Objects/Object Reference
  private readonly page: Page;
  private readonly ele

  /**
   * HomePage Constructor
   * @param page
   */
  constructor(page: Page) {
    this.page = page;
    this.eleUtil = new ElementUtil(page);

  }
  















}
