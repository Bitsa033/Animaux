import { Component, OnInit } from '@angular/core';
import { User } from '../ajouter-user/user';
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
  data:any
  id:any

  ngOnInit(): void {
    this.id= this.idr.snapshot.paramMap.get("id")
    this.getUser()
    
  }

  constructor(private service:UtilsService,private idr:ActivatedRoute){}

  getUser(){
    this.service.getOneUser(this.id).subscribe((response:any)=>{
    this.data=response.data
      
    })
  }

  updateUser(form:NgForm){
   let  data= form.value
    console.log(data);
    this.service.updateUser(this.id,data).subscribe((res)=>{
      alert("Mise à jour réussie !")
      
    })
  }

  deleteUser(){
    alert("Delete empoye")
  }

}
