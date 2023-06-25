import { Component } from '@angular/core';
import { Animal } from './animal';
import { UtilsService } from '../utils.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-ajouter-animal',
  templateUrl: './ajouter-animal.component.html',
  styleUrls: ['./ajouter-animal.component.css']
})
export class AjouterAnimalComponent {

  animal:Animal = new Animal()
  erreur:any
  reussite:any

  // data={
  //   "nom":this.animal.nom,
  //   "prix":this.animal.prix,
  //   "qte":this.animal.qte,

  // }

  constructor(private service:UtilsService){}

  saveAnimal(formData:NgForm){
    let data =formData.value
    this.service.storeAnimal(data).subscribe((res:any)=>{
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
      })
    
  }
  
}
