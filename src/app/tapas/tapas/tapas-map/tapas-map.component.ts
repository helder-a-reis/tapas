import { Component, OnInit, Input } from '@angular/core';

import { Tapa } from '../../Tapa.model';
declare let L;

const iconRetinaUrl = 'assets/marker-icon-2x.png';
const iconUrl = 'assets/marker-icon.png';
const shadowUrl = 'assets/marker-shadow.png';
const iconDefault = L.icon({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41]
});
L.Marker.prototype.options.icon = iconDefault;

@Component({
  selector: 'app-tapas-map',
  templateUrl: './tapas-map.component.html',
  styleUrls: ['./tapas-map.component.css']
})
export class TapasMapComponent implements OnInit {
  @Input() tapas: Tapa[];
  @Input() focusedTapa?: number;

  private map;
  
  segovia = [40.9498125, -4.1249724];
  

  constructor() { }

  ngOnInit() {

    this.map = L.map('map').setView(this.segovia, 15);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);
    
    this.addTapasToMap();

  }


  addTapasToMap() {
    let markers = [];
    
    this.tapas.forEach(tapa => {      
      let marker = L.marker([tapa.restaurant.latitude, tapa.restaurant.longitude]).addTo(this.map);
      marker.bindPopup(tapa.name + ' (' + tapa.restaurant.name + ')');
      if (this.focusedTapa && tapa.id == this.focusedTapa){
        marker.openPopup();
        this.map.flyTo([tapa.restaurant.latitude,tapa.restaurant.longitude], 18);
      }
      markers.push(marker);
    });
    
    if (!this.focusedTapa) {
      this.focusMap(markers);
    }

    
  }

  focusMap(markers: any[]) {
    //zoom map to fit added markers
    let group = L.featureGroup(markers);
    this.map.fitBounds(group.getBounds());
  }

}
