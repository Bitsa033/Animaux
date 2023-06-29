import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { UtilsService } from '../utils.service';
import { ProduitsService } from '../service/produits.service';


@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css'],
  // providers:[AnimalService]
})
export class ProduitsComponent implements OnInit {
  
  produits!:Array<ProduitsService>
  curentPage:number=0
  nbElements:number=3
  totalPage:number=0
  erreur:any
  reussite:any

  constructor(private service:UtilsService ){
    
  }

  ngOnInit(): void {
    this.getProduitsWithPagination();
  }
  
  getProduits(){
    this.service.getAllProducts().subscribe((response:any)=>{
      this.produits=response.data
    },(err)=>{
      this.erreur=err.message
      setTimeout(() => {
        this.erreur=""
      }, 16000);
      console.log(err);
      })
    
  }

  goToPage(i:number){
    this.curentPage=i
    this.getProduitsWithPagination()
  }

  getProduitsWithPagination(){
    this.service.getAllProducts().subscribe((response:any)=>{
      this.produits=response.data
      let index= this.curentPage*this.nbElements
      this.totalPage = ~~(this.produits.length / this.nbElements)
      if (this.produits.length % this.nbElements !=0) {
        this.totalPage++
      }
      let pageP=this.produits.slice(index,index+this.nbElements)
      this.produits=pageP
      console.log(this.totalPage);
      
    },(err)=>{
      this.erreur=err.message
      setTimeout(() => {
        this.erreur=""
      }, 16000);
      console.log(err);
      })

  }

  deleteData(p:any){
    this.service.deleteProduct(p).subscribe((res)=>{
      console.log(res);
      this.reussite="Donnée supprimée avec succès !"
      setTimeout(() => {
        this.reussite=""
      }, 10000);
      let id = this.produits.indexOf(p)
      this.produits.splice(id,1)
      
    })
  }

}
