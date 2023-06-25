import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Animal } from '../ajouter-animal/animal';
import { UtilsService } from '../utils.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-animal',
  templateUrl: './update-animal.component.html',
  styleUrls: ['./update-animal.component.css']
})
export class UpdateAnimalComponent implements OnInit {

  animal = new Animal
  erreur:any
  reussite:any
  id:any

  constructor(private service:UtilsService, private activated_route:ActivatedRoute){}

  ngOnInit(): void {
    this.id = this.activated_route.snapshot.paramMap.get("id")
    this.getAnimal()
    
  }

  getAnimal(){
    this.service.getOneAnimal(this.id).subscribe((response:any)=>{
    this.animal=response.data
      
  })
  }

  UpdateAnimal(formulaire:NgForm){

    let  data = formulaire.value
    this.service.updateAnimal(this.id,data).subscribe((res:any)=>{
      this.reussite=res.statut
      setTimeout(() => {
        this.reussite=""
      }, 5000);
      console.log(res);
      
    },(err)=>{
      this.erreur=err.error.message
      setTimeout(() => {
        this.erreur=""
      }, 5000);
      console.log(err);
      }
    )

  }
}