import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


import { environment } from 'src/environments/environment';
import { Tapa } from '../tapas/Tapa.model';
import { Restaurant } from '../tapas/Restaurant.model';

@Injectable({
  providedIn: 'root'
})
export class DataFirebaseService {

  constructor(private http: HttpClient) { }

  fetchTapas() {
    return this.http.get<Tapa[]>(environment.firebaseURL + '/tapas.json');
  }

  fetchRestaurants() {
    return this.http.get<Restaurant[]>(environment.firebaseURL + '/restaurants.json');
  }

}
