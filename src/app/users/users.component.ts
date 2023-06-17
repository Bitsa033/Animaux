import { Component, OnInit } from '@angular/core';
import { AnimalService } from '../animal.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users!:any

  constructor(private utils_service:AnimalService) {}
  
  ngOnInit(): void {
      this.getAllUsers()
  }

  getAllUsers(){
    this.utils_service.getAnimals().subscribe(data=>{
      console.log(data);
      this.users=data;
      
    })
  }



}
