import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class AnimalService {

  readonly api_spring="localhost:8080/api/animals/get/all"
  readonly api_laravel="http://localhost:8000/api/users"
  
    animals = [
        {id:1,nom:'Grislain',sexe:'Femele',qte:31},
        {id:2,nom:'Raoul',sexe:'Male',qte:55},
        {id:3,nom:'Robert',sexe:'Femele',qte:189},
        // {id:4,nom:'Flamme',sexe:'Male',qte:1200},
        // {id:5,nom:'Roky',sexe:'Femele',qte:1200},

    ]
  constructor(private a:HttpClient) {
    this.animals
    
  }

  getAnimals(){
    return this.a.get(this.api_laravel)
  }

}
