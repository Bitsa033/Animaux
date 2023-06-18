import { Component, OnInit } from '@angular/core';
import { UtilsService } from '../utils.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users:any[]=[]

  constructor(private utils_service:UtilsService) { }
  
  ngOnInit(): void {
      this.getAllUsers()
  }

  getAllUsers(){
    this.utils_service.getAllUsers().subscribe((response:any)=>{
      // this.users=[
      //   {id:1,name:'Grislain',email:'yyyy@'},
      //   {id:1,name:'Grislain',email:'t@ooi'},
      //   {id:1,name:'Grislain',email:'bbh@p'}
      // ]
      console.log(response.data);
      
      this.users=response.data
      
    })
  }



}
