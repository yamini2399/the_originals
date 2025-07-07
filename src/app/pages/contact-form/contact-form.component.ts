import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {

  firstName: string='';
  lastName: string='';
  email: string='';
  contactReason: string='';
  message: string='';
  checkOne: boolean=false;
  checkTwo: boolean=false;

  firstNameErr: string='';
  lastNameErr: string='';
  emailErr: string='';
  contactReasonErr:string='';
  checkTwoErr: string='';

  constructor() {}

  submit(form: NgForm){
    let num=0;
    if(!this.firstName){
      this.firstNameErr='required';
      num += 1;
    }  
    if(!this.lastName){
      this.lastNameErr='required';
      num += 1;
    }  
    if(!this.email){
      this.emailErr='required';
      num += 1;
    }  
    if (this.email && this.validateEmailAddress() == 0) {
      this.emailErr='invalid';
      num += 1;
    }
    if(!this.contactReason){
      this.contactReasonErr='required';
      num += 1;
    }  
    if(!this.checkTwo){
      this.checkTwoErr='required';
      num += 1;
    }  

    if(num==0){
      console.log("Successfully submitted: ", this.firstName, this.lastName, this.email, this.contactReason, this.message);
      document.getElementById('contact-form')!.style.display = 'none';
      document.getElementById('contact-thankyou')!.style.display = 'block';
      form.resetForm();  
    }
    
  }


  validateEmailAddress() {
    var lastChars = this.email.lastIndexOf(".");
    var expression = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
    if (!expression.test(String(this.email).toLowerCase()) || this.email.substr(lastChars, 3).length < 3) {
        return 0;
    }
    else {
        return 1;
    }
  }

  removeErrorMsg(field:string){
    if(field=='firstName'){
      this.firstNameErr='';
    }
    if(field=='lastName'){
      this.lastNameErr='';
    }
    if(field=='email'){
      this.emailErr='';
    }
    if(field=='contactReason'){
      this.contactReasonErr='';
    }
    if(field=='checkTwo'){
      this.checkTwoErr='';
    }
  }
  

}
