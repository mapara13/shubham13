import { gobal } from "./Gobal";


 // To provide all re-usable function / method related to the whole application
 export class general extends gobal {
    async openApplition(){
        await this.page.goto(this.URL)
        console.log("application open")
   
    }
    
    async login(){
        await this.page.locator(this.textbox_loginname).fill(this.username) 
        await this.page.locator(this.textbox_password).fill(this.password) 
        await this.page.locator(this.button_login).click()
        console.log('application open')
        
    }  
    async logout(){
        await this.page.locator(this.button_logout).click()
        console.log('application logout')
    }
    async add_emp1(){
        const frame =  this.page.frameLocator(this.frame)
       await frame.locator(this.add_emp).click()
       await frame.locator(this.last_name).fill(this.lastname)
       await frame.locator(this.frist_name).fill(this.firstname)
       console.log('employee added')

    }
    async fileupload(){
          const frame = await this.page.frameLocator(this.frame)
        await frame.locator(this.file_uploaded).setInputFiles("C:\\Users\\DELL\\Desktop\\shubham\\WhatsApp Image 2026-05-11 at 6.11.32 PM.jpeg")
         console.log('file upload')
    }
    async save(){
        const frame = await this.page.frameLocator(this.frame)
        await frame.locator(this.save1).click()
         console.log('save')
    }
  
 }