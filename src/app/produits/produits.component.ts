import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { UtilsService } from '../utils.service';


@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css'],
  // providers:[AnimalService]
})
export class ProduitsComponent implements OnInit {
  
  produits:any
  erreur:any
  reussite:any

  constructor(private service:UtilsService ){
    
  }

  ngOnInit(): void {
    this.getAnimalsData();
  }
  
  getAnimalsData(){
    this.service.getAllAnimals().subscribe((response:any)=>{
      this.produits=response.data
    },(err)=>{
      this.erreur=err.error.message
      setTimeout(() => {
        this.erreur=""
      }, 16000);
      console.log(err);
      })
    
  }

  deleteData(id:any){
    this.service.deleteAnimal(id).subscribe((res)=>{
      console.log(res);
      this.reussite="Donnée supprimée avec succès !"
      setTimeout(() => {
        this.reussite=""
      }, 10000);
      this.getAnimalsData()
      
    })
  }

}
