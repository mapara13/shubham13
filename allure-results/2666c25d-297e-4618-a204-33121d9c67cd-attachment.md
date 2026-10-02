# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: TC_describribeTestsuit.spec.ts >> tc_ADD_EMPLOYEE
- Location: tests\TC_describribeTestsuit.spec.ts:12:10

# Error details

```
TypeError: app.waitsmrt is not a function
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
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
                            - textbox [ref=e41]
                        - row [ref=e42]:
                          - cell "Password :" [ref=e43]
                          - cell [ref=e44]:
                            - textbox [ref=e45]
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
  1  | import test from "@playwright/test";
  2  | import {general} from "../lib/General";
  3  | test.describe(async()=>{
  4  |     test ('TC_HRMS',async({page})=>{
  5  |         let app = new general(page);
  6  |         await app.openApplition();
  7  |         await app.login();
  8  |     
  9  |         await app.logout();
  10 |     
  11 |      })
  12 |      test ('tc_ADD_EMPLOYEE', async({page})=>{
  13 |           let app = new general(page);
  14 |            await app.openApplition();
> 15 |            await app.waitsmrt();
     |                      ^ TypeError: app.waitsmrt is not a function
  16 |          await app.login();
  17 |          await app.waitsmrt();
  18 |              await app.add_emp1();
  19 |              await app.waitsmrt();
  20 |          await app.fileupload();
  21 |          await app.waitsmrt();
  22 |          await app.save();
  23 |          await app.waitsmrt();
  24 |          await app.logout();
  25 |       })
  26 | })
```