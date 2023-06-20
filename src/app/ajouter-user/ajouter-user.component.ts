import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UtilsService } from '../utils.service';
import { User } from './user';

@Component({
  selector: 'app-ajouter-user',
  templateUrl: './ajouter-user.component.html',
  styleUrls: ['./ajouter-user.component.css']
})
export class AjouterUserComponent {

  user:User = new User()

  data={
    "name":this.user.name,
    "email":this.user.email,
    "password":this.user.password
  }

  constructor(private utils_service:UtilsService) {}

  saveUser(formData:NgForm){
    this.data.name=formData.form.value.nom
    this.data.email=formData.form.value.email
    this.data.password=formData.form.value.password
    console.log(this.data);
    
    this.utils_service.storeUser(this.data).subscribe((response:any)=>{
      
      console.log(response);
      console.log('submited ...');
      
    })
    
  }

}
