import { Component } from '@angular/core';

@Component({
  selector: 'app-animaux',
  templateUrl: './animaux.component.html',
  styleUrls: ['./animaux.component.css']
})
export class AnimauxComponent {
  animaux=[
    {id:1,Nom:'Grislain',sexe:'Femele',qte:31},
    {id:2,Nom:'Raoul',sexe:'Male',qte:55},
    {id:3,Nom:'Robert',sexe:'Femele',qte:189},
    {id:4,Nom:'Flamme',sexe:'Male',qte:1200},
    {id:4,Nom:'Roky',sexe:'Femele',qte:1200},
    
  ]
}
