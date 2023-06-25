import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UtilsService {
  // api_spring = 'localhost:8080/api/animals/';
  // EndPoints
  api_users = 'http://localhost:8000/api/users/';
  api_animals = 'http://localhost:8000/api/animals/';
  // Routes
  get_data = 'get/';
  add_data='store'
  add_qty='update/qte/in/'
  remove_qty='update/qte/out/'
  add_promotion='update/promotion/'
  update_data='update/'
  delete_data='delete/'
  animalToken:any


  constructor(private a: HttpClient) {}

  /**
   *  méthodes pour l'API usersAPI
   */

  getAllUsers() {
    return this.a.get(this.api_users + this.get_data);
  }

  getOneUser(id:any) {
    return this.a.get(this.api_users + this.get_data + id);
  }

  storeUser(data:any) {
    return this.a.post(this.api_users + this.add_data,data);
  }

  updateUser(id:any,data:any){
    return this.a.put(this.api_users + this.update_data + id,data)
  }

  deleteUser(id:any){
    return this.a.delete(this.api_users + this.delete_data + id)
  }

  /**
   *  méthodes pour l'API AnimalsAPI
   */

  getAllAnimals() {
    return this.a.get(this.api_animals + this.get_data);
  }

  getOneAnimal(id:any) {
    return this.a.get(this.api_animals + this.get_data + id);
  }

  storeAnimal(data:any) {
    return this.a.post(this.api_animals + this.add_data,data);
  }

  addQty(id:any,data:any){
    return this.a.put(this.api_animals + this.add_qty + id,data)
  }

  removeQty(id:any,data:any){
    return this.a.put(this.api_animals + this.remove_qty + id,data)
  }

  addPromotion(id:any,data:any){
    return this.a.put(this.api_animals + this.add_promotion + id,data)
  }

  // loadToken(){
  //   const Token = "5|GqULRSPoobDJc6iBd2NbPaR7rhv4Ds3Z4Z6O2AHy";
  //    return Token;
  // }
  // token=5|GqULRSPoobDJc6iBd2NbPaR7rhv4Ds3Z4Z6O2AHy
  updateAnimal(id:any,data:any){
    // let headers = new HttpHeaders();
    // this.animalToken = this.loadToken();
    // headers.append('Content-Type', 'application/json');
    // headers.append('Authorization', this.animalToken);
    return this.a.put(this.api_animals + this.update_data + id,data)
  }

  deleteAnimal(id:any){
    return this.a.delete(this.api_animals + this.delete_data + id)
  }

}
