import { Component, OnInit } from '@angular/core';
import { UtilsService } from '../utils.service';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Produit } from '../ajouter-produit/produit';

@Component({
  selector: 'app-add-qte',
  templateUrl: './add-qte.component.html',
  styleUrls: ['./add-qte.component.css']
})
export class AddQteComponent implements OnInit {
  erreur:any
  reussite:any
  id:any

  produit=new Produit()

  constructor(private service:UtilsService,private activated_route:ActivatedRoute) {
    
  }
  
  ngOnInit(): void {
    this.id = this.activated_route.snapshot.paramMap.get("id")
  }

  addQte(form:NgForm){
    let  data = form.value
    this.service.addQty(this.id,data).subscribe((res:any)=>{
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
