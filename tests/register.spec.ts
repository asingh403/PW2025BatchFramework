import { LoginPage } from '../pages/LoginPage';
import { RegistrationPage } from '../pages/RegistrationPage';
import { test, expect } from '../fixtures/baseFixtures';
import fs from 'fs';
import {parse} from 'csv-parse/sync';


type regData = {
    firstName: string,
    lastName: string,
    email: string,
    telephone: string,
    password: string,
    subscribeNewsletter: string
}

let fileContent = fs.readFileSync(`./data/register.csv`, 'utf-8');
let registrationData:regData[] = parse(fileContent, {
    columns: true,
    skip_empty_lines: true
});



for(let user of registrationData){
test(`verify user is able to register ${user.firstName}`, async({ page, baseURL }) => {
  
  let loginPage = new LoginPage(page);
  await loginPage.goToLoginPage(baseURL);

  let registerPage:RegistrationPage =await loginPage.navigateToRegistrationPage();
  const isUserRegistered:boolean = await registerPage.registerUser(user.firstName, user.lastName, getRandomEmail(), user.telephone, user.password, user.subscribeNewsletter);
  expect(isUserRegistered).toBeTruthy();
 })
}

function getRandomEmail():string {
    let randomEmail:string = 'auto_'+ Math.random().toString(36).substring(2, 9)+'@qa.test';
    console.log('random email : '+ randomEmail);
    return randomEmail;
} 
