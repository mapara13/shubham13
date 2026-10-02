 // To Provide actual automation test scripts/ steps
 import test  from "@playwright/test";
import {general} from "../lib/General";


 test ('TC_HRMS',async({page})=>{
    let app = new general(page);
    await app.openApplition();
    await app.login();
    await app.logout();

 })