import test from "@playwright/test";
import {general} from "../lib/General";
test.describe(async()=>{
    test ('TC_HRMS',async({page})=>{
        let app = new general(page);
        await app.openApplition();
        await app.login();
        await app.logout();
    
     })
     test ('tc_ADD_EMPLOYEE', async({page})=>{
        let app = new general(page);
        await app.openApplition();
        await app.login();
        await app.add_emp1();
        await app.fileupload();
        await app.save();
        await app.logout();
      })
})