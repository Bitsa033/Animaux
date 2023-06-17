import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})

export class AnimalService {

  readonly api="localhost:8080/api/animals"
  readonly endpoint="/get/all"

    animals = [
        {id:1,nom:'Grislain',sexe:'Femele',qte:31},
        {id:2,nom:'Raoul',sexe:'Male',qte:55},
        {id:3,nom:'Robert',sexe:'Femele',qte:189},
        // {id:4,nom:'Flamme',sexe:'Male',qte:1200},
        // {id:5,nom:'Roky',sexe:'Femele',qte:1200},

    ]
  constructor(private http:HttpClient) {
    this.animals
    
    
  }

  getAll(){
    return this.http.get(this.api+this.endpoint)
  }

}
