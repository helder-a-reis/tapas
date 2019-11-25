import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Tapa } from '../../Tapa.model';

@Component({
  selector: 'app-tapas-list',
  templateUrl: './tapas-list.component.html',
  styleUrls: ['./tapas-list.component.css']
})
export class TapasListComponent implements OnInit {
  @Input() tapas: Tapa[];
  @Output() showTapa = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  focusMap(tapaId: number){
    this.showTapa.emit(tapaId);
  }

}
