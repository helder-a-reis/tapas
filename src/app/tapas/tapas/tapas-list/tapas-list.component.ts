import { Component, OnInit, Input } from '@angular/core';

import { Tapa } from '../../Tapa.model';

@Component({
  selector: 'app-tapas-list',
  templateUrl: './tapas-list.component.html',
  styleUrls: ['./tapas-list.component.css']
})
export class TapasListComponent implements OnInit {
  @Input() tapas: Tapa[];

  constructor() { }

  ngOnInit() {
  }


}
