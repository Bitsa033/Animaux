import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UtilsService {
  // api_spring = 'localhost:8080/api/animals/';

  api_users = 'http://localhost:8000/api/users/';
  api_animals = 'http://localhost:8000/api/animals/';

  get_data = 'get';
  add_data='store'
  update_data='update'
  delete_data='delete'


  constructor(private a: HttpClient) {}

  getAllUsers() {
    return this.a.get(this.api_users + this.get_data);
  }

  getOneUser(id:any) {
    return this.a.get(this.api_users + this.get_data + "/" + id);
  }

  storeUser(data:any) {
    return this.a.post(this.api_users + this.add_data,data);
  }

  updateUser(id:any,data:any){
    return this.a.put(this.api_users + this.update_data + "/" + id,data)
  }

  deleteUser(data:any){
    return this.a.delete(this.api_users + this.delete_data,data)
  }

  getAllAnimals() {
    return this.a.get(this.api_animals + this.get_data);
  }

}
