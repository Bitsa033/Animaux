import { Component } from '@angular/core';

// axios.get("localhost:8000/create-aninal").then((data)=>{
//   console.log(data);
  
// });

@Component({
  selector: 'app-ajouter-animal',
  templateUrl: './ajouter-animal.component.html',
  styleUrls: ['./ajouter-animal.component.css']
})
export class AjouterAnimalComponent {

  submitData(){
    console.log("Ok");
    
  }
  
}
