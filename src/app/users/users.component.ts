import { Component, OnInit } from '@angular/core';
import { AnimalService } from '../animal.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users:any[]=[]

  constructor(private utils_service:AnimalService) { }
  
  ngOnInit(): void {
      this.getAllUsers()
  }

  getAllUsers(){
    this.utils_service.getAnimals().subscribe((data:any)=>{
      // this.users=[
      //   {id:1,name:'Grislain',email:'yyyy@'},
      //   {id:1,name:'Grislain',email:'t@ooi'},
      //   {id:1,name:'Grislain',email:'bbh@p'}
      // ]
      console.log(data.data);
      
      this.users=data.data
      
    })
  }



}
