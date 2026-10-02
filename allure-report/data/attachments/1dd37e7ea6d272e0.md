# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: TC002.spec.ts >> @regression_tc_ADD_EMPLOYEE
- Location: tests\TC002.spec.ts:3:6

# Error details

```
Error: page.goto: net::ERR_NETWORK_CHANGED at https://sureshitacademy.in/hrms/login.php
Call log:
  - navigating to "https://sureshitacademy.in/hrms/login.php", waiting until "load"

```

# Test source

```ts
  1  | import { gobal } from "./Gobal";
  2  | 
  3  | 
  4  |  // To provide all re-usable function / method related to the whole application
  5  |  export class general extends gobal {
  6  |     async openApplition(){
> 7  |         await this.page.goto(this.URL)
     |                         ^ Error: page.goto: net::ERR_NETWORK_CHANGED at https://sureshitacademy.in/hrms/login.php
  8  |         console.log("application open")
  9  |    
  10 |     }
  11 |     
  12 |     async login(){
  13 |         await this.page.locator(this.textbox_loginname).fill(this.username) 
  14 |         await this.page.locator(this.textbox_password).fill(this.password) 
  15 |         await this.page.locator(this.button_login).click()
  16 |         console.log('application open')
  17 |         
  18 |     }  
  19 |     async logout(){
  20 |         await this.page.locator(this.button_logout).click()
  21 |         console.log('application logout')
  22 |     }
  23 |     async add_emp1(){
  24 |         const frame =  this.page.frameLocator(this.frame)
  25 |        await frame.locator(this.add_emp).click()
  26 |        await frame.locator(this.last_name).fill(this.lastname)
  27 |        await frame.locator(this.frist_name).fill(this.firstname)
  28 | 
  29 |     }
  30 |     async fileupload(){
  31 |           const frame = await this.page.frameLocator(this.frame)
  32 |         await frame.locator(this.file_uploaded).setInputFiles("C:\\Users\\DELL\\Desktop\\shubham\\WhatsApp Image 2026-05-11 at 6.11.32 PM.jpeg")
  33 |     }
  34 |     async save(){
  35 |         const frame = await this.page.frameLocator(this.frame)
  36 |         await frame.locator(this.save1).click()
  37 |     }
  38 |     /*async waitsmrt(){
  39 |         await this.page.waitForTimeout(3000)
  40 |         console.log('wait for 3000sec')
  41 |     }
  42 | */
  43 |  }
```