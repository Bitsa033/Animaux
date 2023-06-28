import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UtilsService {
  // EndPoints
  end_point = 'http://localhost:8000/api/';
  // Routes
  all_users = 'users';
  all_products = 'produits';
  action_user='user/'
  action_product='produit/'
  store='store'
  update='update/'
  delete='delete/'
  add_qty='qty/add/'
  remove_qty='qty/withdrap/'
  add_promotion='promotion/'
  animalToken:any


  constructor(private a: HttpClient) {}

  /**
   *  méthodes pour les utilisateurs
   */

  getAllUsers() {
    return this.a.get(this.end_point + this.all_users);
  }

  getOneUser(id:any) {
    return this.a.get(this.end_point + this.action_user + id);
  }

  storeUser(data:any) {
    return this.a.post(this.end_point + this.action_user + this.store,data);
  }

  updateUser(id:any,data:any){
    return this.a.put(this.end_point + this.action_user + this.update + id,data)
  }

  deleteUser(id:any){
    return this.a.delete(this.end_point + this.action_user + this.delete + id)
  }

  /**
   *  méthodes pour les produits
   */

  getAllProducts() {
    return this.a.get(this.end_point + this.all_products);
  }

  getOneProduct(id:any) {
    return this.a.get(this.end_point + this.action_product + id);
  }

  storeProduct(data:any) {
    return this.a.post(this.end_point + this.action_product + this.store,data);
  }

  addQty(id:any,data:any){
    return this.a.put(this.end_point + this.action_product + this.add_qty + id,data)
  }

  removeQty(id:any,data:any){
    return this.a.put(this.end_point + this.action_product +this.remove_qty + id,data)
  }

  addPromotion(id:any,data:any){
    return this.a.put(this.end_point + this.add_promotion + id,data)
  }

  updatePrduct(id:any,data:any){
    return this.a.put(this.end_point + this.action_product + this.update + id,data)
  }

  deleteProduct(id:any){
    return this.a.delete(this.end_point + this.action_product + this.delete + id)
  }

}
