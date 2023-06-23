import { Component, OnInit } from '@angular/core';
import { UtilsService } from '../utils.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users:any
  id:any
  
  constructor(private utils_service:UtilsService, private activated_route:ActivatedRoute) { }
  
  ngOnInit(): void {

    this.getAllUsers()
  }

  getAllUsers(){
    this.utils_service.getAllUsers().subscribe((response:any)=>{
      
      this.users=response.data
      
    })
  }

  deleteUser(id:any){
    if (confirm("Voulez-vous vraiment supprimer cette information ?")) {
      
      this.utils_service.deleteUser(id).subscribe((res)=>{
        
        alert("Utilisateur supprimé avec succès !")
        this.getAllUsers()
      })
      
    }
    
  }



}
