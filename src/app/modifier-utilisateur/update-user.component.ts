import { Component, OnInit } from '@angular/core';
import { User } from '../ajouter-utilisateur/user';
import { NgForm } from '@angular/forms';
import { UtilsService } from '../utils.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  user = new User()

  id:any

  ngOnInit(): void {
    this.id= this.activated_route.snapshot.paramMap.get("id")
    this.getUser()
    
  }

  constructor(private service:UtilsService,private activated_route:ActivatedRoute){}

  getUser(){
    this.service.getOneUser(this.id).subscribe((response:any)=>{
    this.user=response.data
    
    })
  }

  updateUser(form:NgForm){
   let  data = form.value
    this.service.updateUser(this.id,data).subscribe((res:any)=>{
      console.log(res);
      
      let id = res.data.user.id
      let name = res.data.user.name
      alert("Mise à jour réussie pour l'utisteur n°"+id + " = " + name)
      
    })
  }


}
