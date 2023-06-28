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
  reussite:any
  erreur:any
  
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
          this.reussite="Donnée supprimée avec succès !"
        setTimeout(() => {
          this.reussite=""
        }, 10000);
        this.getAllUsers()
        
      },(err)=>{
        this.erreur=err.message
        setTimeout(() => {
          this.erreur=""
        }, 10000);
        })
      
    }
    
  }



}
