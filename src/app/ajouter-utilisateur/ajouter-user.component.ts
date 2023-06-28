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
  reussite:any
  erreur:any

  constructor(private utils_service:UtilsService) {}

  saveUser(formData:NgForm){
    let data=formData.form.value
    console.log(data);
    
    this.utils_service.storeUser(data).subscribe((res:any)=>{
      this.reussite=res.statut
      setTimeout(() => {
        this.reussite=""
      }, 10000);
      console.log(res);
    },(err:any)=>{
      this.erreur=err.error.message
      setTimeout(() => {
        this.erreur=""
      }, 10000);
      console.log(err);
      })
    
  }

}
