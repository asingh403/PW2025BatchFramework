import { Locator, Page } from "@playwright/test";
import { ElementUtil } from "../utils/ElementUtil";
import { LoginPage } from "../pages/LoginPage";

export class ResultPage {
  //Page locators/Objects/Object Reference
  private readonly page: Page;
  private readonly eleUtil: ElementUtil;
  private readonly logoutLink: Locator;
  private readonly loginLink: Locator;
  private readonly search: Locator;
  private readonly searchIcon: Locator;

  /**
   * HomePage Constructor
   * @param page
   */
  constructor(page: Page) {
    this.page = page;
    this.eleUtil = new ElementUtil(page);
    this.logoutLink = page.getByRole("link", { name: "Logout" });
    this.search = page.getByRole("textbox", { name: "Search" });
    this.searchIcon = page.locator(`#search > span.input-group-btn > button.btn`,);
    this.loginLink = page.getByRole("link", { name: "Login" });
  }
  















}
