import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Produit } from '../ajouter-produit/produit';
import { UtilsService } from '../utils.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-animal',
  templateUrl: './update-produit.component.html',
  styleUrls: ['./update-produit.component.css']
})
export class UpdateProduitComponent implements OnInit {

  produit = new Produit()
  erreur:any
  reussite:any
  id:any

  constructor(private service:UtilsService, private activated_route:ActivatedRoute){}

  ngOnInit(): void {
    this.id = this.activated_route.snapshot.paramMap.get("id")
    this.getProduct()
    
  }

  getProduct(){
    this.service.getOneProduct(this.id).subscribe((response:any)=>{
    this.produit=response.data
      
  })
  }

  UpdateProduct(formulaire:NgForm){

    let  data = formulaire.value
    this.service.updatePrduct(this.id,data).subscribe((res:any)=>{
      this.reussite=res.statut
      setTimeout(() => {
        this.reussite=""
      }, 10000);
      console.log(res);
      
    },(err)=>{
      this.erreur=err.error.message
      setTimeout(() => {
        this.erreur=""
      }, 10000);
      console.log(err);
      }
    )

  }
}
