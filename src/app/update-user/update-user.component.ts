import { Component, OnInit } from '@angular/core';
import { User } from '../ajouter-user/user';
import { NgForm } from '@angular/forms';
import { UtilsService } from '../utils.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  user:User = new User()
  u:any
  id= 7

  ngOnInit(): void {
    this.getUser()
    
  }

  constructor(private service:UtilsService){}


  getUser(){
    this.service.getOneUser(this.id).subscribe((response:any)=>{
      this.u =response.data
      console.log(response.data);
      
    })
  }

  updateUser(form:NgForm){
   let  name= form.value.name
    alert("Update user" + name)
  }

  deleteUser(){
    alert("Delete empoye")
  }

}
