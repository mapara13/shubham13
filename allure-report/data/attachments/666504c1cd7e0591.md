# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: TC001.spec.ts >> @smoke_TC_HRMS
- Location: tests\TC001.spec.ts:6:6

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('//input[@name=\'Submit\']')
    - locator resolved to <input tabindex="3" type="Submit" name="Submit" value="Login" class="button"/>
  - attempting click action
    - waiting for element to be visible, enabled and stable

```

# Page snapshot

```yaml
- generic [ref=e1]:
  - table [ref=e2]:
    - rowgroup [ref=e3]:
      - row [ref=e4]:
        - cell [ref=e5]
        - cell [ref=e7]
  - table [ref=e8]:
    - rowgroup [ref=e9]:
      - row [ref=e10]:
        - cell [ref=e11]:
          - table [ref=e12]:
            - rowgroup [ref=e13]:
              - row [ref=e14]:
                - cell [ref=e15]
                - cell [ref=e16]
                - cell [ref=e17]
                - cell [ref=e18]
                - cell [ref=e19]
                - cell [ref=e20]
  - generic [ref=e21]:
    - table [ref=e22]:
      - rowgroup [ref=e23]:
        - row [ref=e24]:
          - cell [ref=e25]
          - cell [ref=e26]:
            - table [ref=e27]:
              - rowgroup [ref=e28]:
                - row [ref=e29]:
                  - cell [ref=e30]
                  - cell [ref=e31]:
                    - table [ref=e33]:
                      - rowgroup [ref=e34]:
                        - row [ref=e35]:
                          - cell [ref=e36]
                          - cell [ref=e37]
                        - row [ref=e38]:
                          - cell "Login Name :" [ref=e39]
                          - cell [ref=e40]:
                            - textbox [ref=e41]: sureshit
                        - row [ref=e42]:
                          - cell "Password :" [ref=e43]
                          - cell [ref=e44]:
                            - textbox [active] [ref=e45]: sureshit
                        - row [ref=e46]:
                          - cell [ref=e47]:
                            - button "Login" [ref=e48]
                          - cell [ref=e49]:
                            - button "Clear" [ref=e50]
                        - row [ref=e51]:
                          - cell [ref=e52]
                          - cell [ref=e53]:
                            - strong [ref=e54]
                  - cell [ref=e55]
                  - cell [ref=e57]
                - row [ref=e58]:
                  - cell [ref=e59]
                - row [ref=e60]:
                  - cell [ref=e61]
                - row [ref=e62]:
                  - cell [ref=e63]
                  - cell [ref=e65]
                - row [ref=e66]:
                  - cell [ref=e67]
                  - cell [ref=e68]:
                    - table [ref=e69]:
                      - rowgroup [ref=e70]:
                        - row [ref=e71]:
                          - cell "Orange HRM comes as a comprehensive solution for the efficient management and development of your Human Resource. It will assist you in the complex and strategic process of managing this crucial resource of your enterprise. Based on modular architecture, it facilitates a vast range of HR activities, with features that reflect the main HR management activities. It comes as a web-enabled application and considering the available flexibility, OrangeHRM is a perfect platform for reengineering your HR processes and achieving a new level of HR Management." [ref=e72]
                - row [ref=e73]:
                  - cell [ref=e74]
                  - cell [ref=e76]
                - row [ref=e77]:
                  - cell [ref=e78]
                  - cell [ref=e79]
                - row [ref=e80]:
                  - cell [ref=e81]
                  - cell [ref=e82]
                  - cell [ref=e83]
                  - cell [ref=e84]
                  - cell [ref=e85]
                  - cell [ref=e86]
          - cell [ref=e87]
    - table [ref=e88]:
      - rowgroup [ref=e89]:
        - row [ref=e90]:
          - cell [ref=e91]:
            - link "SureshIT" [ref=e92] [cursor=pointer]:
              - /url: "#"
```

# Test source

```ts
  1  | import { gobal } from "./Gobal";
  2  | 
  3  | 
  4  |  // To provide all re-usable function / method related to the whole application
  5  |  export class general extends gobal {
  6  |     async openApplition(){
  7  |         await this.page.goto(this.URL)
  8  |         console.log("application open")
  9  |    
  10 |     }
  11 |     
  12 |     async login(){
  13 |         await this.page.locator(this.textbox_loginname).fill(this.username) 
  14 |         await this.page.locator(this.textbox_password).fill(this.password) 
> 15 |         await this.page.locator(this.button_login).click()
     |                                                    ^ Error: locator.click: Test timeout of 30000ms exceeded.
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