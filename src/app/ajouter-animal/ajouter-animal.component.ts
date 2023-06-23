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

  data={
    "nom":this.animal.nom,
    "prix":this.animal.prix,
    "qte":this.animal.qte
  }

  constructor(private service:UtilsService){}

  saveAnimal(formData:NgForm){
    this.data.nom=formData.form.value.nom
    this.data.prix=formData.form.value.prix
    this.data.qte=formData.form.value.qte
    console.log(this.data);
    
    this.service.storeAnimal(this.data).subscribe((response:any)=>{
  
      console.log(response);
      
      alert("Animal enregistré avec sucès !")
      
    })
    
  }
  
}
