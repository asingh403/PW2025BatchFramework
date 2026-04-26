import { Locator, Page } from "@playwright/test";
import { ElementUtil } from "../utils/ElementUtil";


export class ProductInfoPage{
    
    private readonly page:Page;
    private readonly eleUtil: ElementUtil;
    private readonly header: Locator;
    private readonly imageCount: Locator;
    private readonly productMetaData:Locator;
    private readonly productPriceData:Locator;

    private readonly productMap = new Map<string, string | number | null>();


    constructor(page:Page){
        this.page = page;
        this.eleUtil = new ElementUtil(page);
        this.header = page.locator('h1');
        this.imageCount = page.locator('div#content img');
        this.productMetaData = page.locator(`//div[@id='content']//ul[@class='list-unstyled'][1]/li`);
        this.productPriceData = page.locator(`//div[@id='content']//ul[@class='list-unstyled'][2]/li`);
    }


    async getProductHeader():Promise<string>{
        const header = await this.eleUtil.getInnerText(this.header);
        console.log('product header : '+ header);
        return header.trim();
    }

    async getProductImagesCount():Promise<number>{
        await this.eleUtil.waitForElementVisible(this.imageCount);
        const imagesCount = await this.imageCount.count();
        console.log(`total number of images for ${await this.getProductHeader()} ===> ${imagesCount}`);
        return imagesCount;
    }

    /**
     * @returns this method is returning complete product information: header, images count, metadata & pricing data
     */
    async getProductDetails():Promise<Map<string, string | number | null>>{
        this.productMap.set('header', await this.getProductHeader());
        this.productMap.set('imageCount', await this.getProductImagesCount());
        await this.getProductMetaData();
        await this.getProductPriceData();

        console.log(`full product details for products : ${await this.getProductHeader()}`);
        await this.printProductDetails();
        return this.productMap;
    }


    private async printProductDetails(){
        for(const [key, value] of this.productMap){
            console.log('product details : '+ key, value);
        }
    }


// Samsung Galaxy Tab 10.1
// Product Code: SAM1
// Reward Points: 1000
// Availability: Pre-Order
    
    private async getProductMetaData(){
         let productMetadata:string[] = await this.productMetaData.allInnerTexts();
         for(let meta of productMetadata){
            console.log("productMetadata:", productMetadata);
            console.log("length:", productMetadata.length);
            let metadata:string[] = meta.split(':');
            let metaKey:string = metadata[0].trim();
            let metaValue:string = metadata[1].trim();
            this.productMap.set(metaKey, metaValue);
         }
    }

// $241.99 -- 0th
// Ex Tax: $199.99 --ist
    private async getProductPriceData(){
         let productPricing:string[] = await this.productPriceData.allInnerTexts();
         let productPrice:string = productPricing[0].trim();
         let productExPrice:string = productPricing[1].split(':')[1].trim();
         
         this.productMap.set('price', productPrice);
         this.productMap.set('extaxprice', productExPrice);
    }
}

