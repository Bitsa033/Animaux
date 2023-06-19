import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UtilsService {
  // api_spring = 'localhost:8080/api/animals/';

  api_users = 'http://localhost:8000/api/users/';
  api_animals = 'http://localhost:8000/api/animals/';
  all_data = 'get';
  add_data='store'


  constructor(private a: HttpClient) {}

  getAllUsers() {
    return this.a.get(this.api_users + this.all_data);
  }

  storeUser() {
    return this.a.get(this.api_users + this.add_data);
  }

  getAllAnimals() {
    return this.a.get(this.api_animals + this.all_data);
  }

}
