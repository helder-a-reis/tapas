import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map, zip } from "rxjs/operators";

import { Tapa } from "./Tapa.model";
import { Restaurant } from "./Restaurant.model";
import { DataFirebaseService } from '../shared/data-firebase.service';




@Injectable({
  providedIn: 'root'
})
export class TapaService implements OnInit {

  constructor(private dataService: DataFirebaseService) { }

  ngOnInit() {

  }


  getTapas(): Observable<Tapa[]> {
    return this.dataService.fetchTapas().
      pipe(
        map(tapasData => {
          this.dataService.fetchRestaurants().subscribe(restData => {
            tapasData = this.joinRestaurantsToTapas(tapasData, restData);
          });
          return tapasData;
        })
      );
  }


  private joinRestaurantsToTapas(tapas: Tapa[], restaurants: Restaurant[]): Tapa[] {
    tapas.forEach(tapa => {
      let restaurant = restaurants.find(x => x.id == tapa.restaurantId);
      tapa.restaurant = restaurant;
    });    
    return tapas;
  }
}
