 // To Provide Test Data & Object / element related to whole application
 import {Page} from '@playwright/test'
 
 export class gobal{
   constructor(public page: Page){
  this.page=page;
   }
    //*********************test data*************************//
    public URL:string ="https://sureshitacademy.in/hrms/login.php";
    public username: string="sureshit";
    public password:string ="sureshit";
    public lastname: string="patil";
    public firstname :string="kavita";
    //*********************object/element******************//
    public textbox_loginname : string ="//input[@name='txtUserName']";
    public textbox_password : string ="//input[@name='txtPassword']";
    public button_login : string ="//input[@name='Submit']";
    public frame:string="//iframe[@name='rightMenu']";
    public add_emp : string ="//input[@value='Add']"
    public last_name : string ="//input[@name='txtEmpLastName']"
    public frist_name : string ="//input[@name='txtEmpFirstName']"
    public file_uploaded : string ="//input[@type='file']"
    public save1 : string ="//input[@value='Save']"
    public button_logout : string ="//a[text()='Logout']";
    

    
    
 }