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
    setTimeout(() => {
      this.service.getAllAnimals().subscribe((response:any)=>{
        this.animaux=response.data
      })

    }, 1000);
    
  }

  deleteData(id:any){
    this.service.deleteAnimal(id).subscribe((res)=>{
      console.log(res);
      alert("Animal supprimé avec succès !")
      this.getAnimalsData()
      
    })
  }
}
