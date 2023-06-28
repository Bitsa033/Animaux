import { Component } from '@angular/core';
import { Produit } from './produit';
import { UtilsService } from '../utils.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-ajouter-produit',
  templateUrl: './ajouter-produit.component.html',
  styleUrls: ['./ajouter-produit.component.css']
})
export class AjouterProduitComponent {

  produit = new Produit()
  erreur:any
  reussite:any

  constructor(private service:UtilsService){}

  saveProduit(formData:NgForm){
    let data =formData.value
    this.service.storeProduct(data).subscribe((res:any)=>{
      this.reussite=res.statut
      setTimeout(() => {
        this.reussite=""
      }, 12000);
      console.log(res);
    },(err:any)=>{
      this.erreur=err.error.message
      setTimeout(() => {
        this.erreur=""
      }, 12000);
      console.log(err);
      })
    
  }
  
}
