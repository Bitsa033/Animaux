import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { UtilsService } from '../utils.service';


@Component({
  selector: 'app-animaux',
  templateUrl: './animaux.component.html',
  styleUrls: ['./animaux.component.css'],
  // providers:[AnimalService]
})
export class AnimauxComponent implements OnInit {
  
  animaux:any

  constructor(private service:UtilsService ){
    
  }

  ngOnInit(): void {
    this.getAnimalsData();
  }
  
  getAnimalsData(){

    this.service.getAllAnimals().subscribe((response:any)=>{
      
      this.animaux=response.data
      
    })
    
  }

  // animaux=[
  //   {id:1,Nom:'Grislain',sexe:'Femele',qte:31},
  //   {id:2,Nom:'Raoul',sexe:'Male',qte:55},
  //   {id:3,Nom:'Robert',sexe:'Femele',qte:189},
  //   {id:4,Nom:'Flamme',sexe:'Male',qte:1200},
  //   {id:4,Nom:'Roky',sexe:'Femele',qte:1200},
    
  // ]
}
