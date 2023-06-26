import { Component, OnInit } from '@angular/core';
import { Produit } from '../ajouter-produit/produit';
import { UtilsService } from '../utils.service';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-with-draw-qte',
  templateUrl: './with-draw-qte.component.html',
  styleUrls: ['./with-draw-qte.component.css']
})
export class WithDrawQteComponent implements OnInit {

  erreur:any
  reussite:any
  id:any
  produit= new Produit()

  constructor(private service:UtilsService, private activated_route:ActivatedRoute) {}

  ngOnInit(): void {
    this.id=this.activated_route.snapshot.paramMap.get('id')
  }

  removeQte(form:NgForm){
    let  data = form.value
    this.service.removeQty(this.id,data).subscribe((res:any)=>{
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
